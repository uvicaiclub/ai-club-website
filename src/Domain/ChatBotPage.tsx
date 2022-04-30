import { useState } from "react"
import * as $ from 'jquery'
import "../styles/chatbot.css"

interface chatbot {
  user_input: string
  response: string
  rating: number
}

const ChatbotPage = () => {

  // Prevents usual form submission
  const form = document.getElementById("chat")
  form?.addEventListener("submit", event => {
    event.preventDefault()
  })

  // Click Submit on "Enter" button
  function keyboardSubmit(event: { keyCode: any; }) {
    if (event.keyCode === 13) {  // 13 is the return key
      const submit = document.getElementById("submit")
      if(submit !== null) submit.click()
    }
  }

  ///////////////////////
  ////// INITIALIZE /////
  ///////////////////////

  const unknown = "I don't understand"
  let response = ""
  const [userInput, setUserInput] = useState("")
  const [previousUserInput, setPreviousUserInput] = useState("")
  const [responded, setResponded] = useState(false)

  
  //////////////////
  ////// MAIN //////
  //////////////////

  //Runs when the submit button is pressed
  function Submit() {

    //Do not submit blank responses
    if(userInput === "") return

    // Update the previous user input field
    const previousUserInputObj = document.getElementById('previous_user_input')
    if(previousUserInputObj) previousUserInputObj.innerHTML = userInput
    
    //Enable voting and responses
    setResponded(true)
    setPreviousUserInput(userInput)

    //Convert user string to set
    let userInputTokens = Tokenize(userInput.toLowerCase())

    //Queries the entire database
    //TODO: test/test.php needs a real name and local directory
    $.post("http://209.205.68.17:8888/PHP/submit.php", {
    }, function(data) {

      //Retrieves the database
      let db = JSON.parse(data)
        
      //Convert strings to one large set (not very efficient)
      let dbInputTokens: string[] = []
        db.forEach((element: chatbot) => {
          dbInputTokens.push(element["user_input"])
        })
        
      //Returns an array of threshold jaccard values (currently highest match).
      let thresh_i
      for(let i = 100; i > 0; i--) {
        thresh_i = JaccardThreshold(userInputTokens, dbInputTokens, i * 0.01)
        if(thresh_i.length !== 0) break
      }

      //Converts indexes to db dictionary values
      let choices = [];
      if(thresh_i) {
        for(let i = 0; i < thresh_i.length; i++) {
          choices.push(db[thresh_i[i]])
        }
      }

      //Chooses best responses based on rating
      response = (ratingPick(choices))

      //return the unknown response
      if(response === null) response = unknown

      //Populate HTML values for user
      const responseObj = document.getElementById('response')
      if(responseObj) responseObj.innerHTML = response

      // TODO: user input reset on form submission.
      // $('#chat')[0].reset();

      //Reveal voting for response
      ShowRating(true)
    })
  }

  //Runs when the add response button is pressed
  function AddResponse() {

    //checks and prevents spam
    if((responded === false) || (userInput === "")) return
    setResponded(false)

    //Tokenizes the user string
    const tokenArray = Tokenize(previousUserInput).join(" ")

    //If the string and response are already in the db, increase
    //the rating. Otherwise, add to database
    $.post("http://209.205.68.17:8888/PHP/addResponse.php", {
      previousUserInput: tokenArray, 
      userInput: userInput
    }, function(data) {

      //Populate HTML values for user
      const responseObj = document.getElementById('response')
      if(responseObj) responseObj.innerHTML = userInput

      // TODO: user input reset on form submission.
      // 	$('#chat')[0].reset();
          
      //prevents upvoting own comment
      ShowRating(false)
    })
  }

  //Increases the rating for responses
  function UpVote() {

    //Omit unknown response
    if((response === unknown) || (response === "<br>\n            ")) return

    //updates the db
    $.post("http://209.205.68.17:8888/PHP/upvote.php", {
      previousUserInput: previousUserInput, 
      response: response
    }, function(data) {

      //prevents spamming
      ShowRating(false)
    })
  }

  //Decreases the rating for responses
  function DownVote() {

    //Omit unknown response
    if((response === unknown) || (response === "<br>\n            ")) return

    //updates the db
    $.post("http://209.205.68.17:8888/PHP/downvote.php", {
      previousUserInput: previousUserInput, 
      response: response
    }, function(data) {

      //prevents spamming
      ShowRating(false)
    })
  }


  ///////////////////////
  ////// FUNCTIONS //////
  ///////////////////////

  const ShowRating = (show: boolean) => {
    const thumbUp = document.getElementById('thumb_up')
    const thumbDown = document.getElementById('thumb_down')

    if(show) {
      if(thumbUp) thumbUp.style.visibility = "visible"
      if(thumbDown) thumbDown.style.visibility = "visible"
    }
    else {
      if(thumbUp) thumbUp.style.visibility = "hidden"
      if(thumbDown) thumbDown.style.visibility = "hidden"
    }
  }

  //Jaccard Similarity
  function Jaccard(set1: string[], set2: string[]) {
    const intersect = new Set(set1.filter(value => set2.includes(value)))
    const union = new Set([...set1, ...set2])
    return intersect.size / union.size
  }

  //Tokenize input into string array
  function Tokenize(str: string) {

    //Parse string and split
    let str_arr = str.toLowerCase()
    .replace('?',' ?')
    .replace('!',' !')
    .replace(',',' ')
    .replace('.',' ')
    .replace('\'re',' are')
    .replace('\'ll',' will')
    .replace('\'d',' would')
    .replace('\'s',' is')
    .replace('\'m',' am')
    .split(" ")

    //Remove empty elements
    for(let i = 0; i < str_arr.length; i++) {
      if (str_arr[i] === "") str_arr.splice(i--, 1)
    }
    return str_arr
  }

  //Returns the indexs with Jaccard value greater than threshold
  function JaccardThreshold(str_set: string[], db_set: string[], threshold: number = 0.50) {

    //run Jaccard and record index of threshold values
    let threshold_index = []
    for(let j = 0; j < db_set.length; j++) {
      if(Jaccard(str_set, db_set[j].split(" ")) >= threshold) threshold_index.push(j)
    }
    return threshold_index
  }

  //Algorithm for picking similar strings based 
  //on random numbers and rank.
  function ratingPick(choices: any[]) {
    
    //Nothing to choose from, or only one choice
    if(choices.length === 0) return null
    if(choices.length === 1) return choices[0]["response"]

    //Variables used in calculation
    let my_data = []
    let cur_rank = 0
    let max_rank = 0
    let min = 9999999

    //obtain the minimum rating, parse the ratings
    //into Int and add them to my_data.
    for(const x in choices) {
      my_data.push(parseInt(choices[x]["rating"]))
      if(choices[x]["rating"] < min) min = choices[x]["rating"]
    }

    //Determines the algorithm for normalizing the data
    let negative = false
    if(min <= 1) negative = true
        
    //Determines the difference value
    let difference =  min - 1
    if(negative === true) difference = -Math.abs(min - 1)

    for(const x in my_data) {
      my_data[x] -= difference //Modify data with difference
      max_rank += my_data[x] //Creating the max_rank value
    }

    //Generate our random number
    const rand = Math.random()

    //run probability algorithm
    for(const x in my_data) {
      // create a threshold for our first choice
      cur_rank += (my_data[x] / max_rank)

      // return the choice which lies in the threshold
      if(rand < cur_rank) {
        return choices[x]["response"]
      }
    }
  }

  return (
    <main>
      <br/>
      <h1>This is the UVic AI Club Chatbot</h1>
      <br/>
      <br/>
      <div className="chatbot">

        You:
        <div id="previous_user_input"><br/></div>
        <br/>
        <br/>

        Chatbot:
        <div id="response"><br/></div>
        <br/>
        <br/>

        <form id="chat" method="post">
          <input name="user_input" id="user_input" type="text" onChange={e => setUserInput(e.target.value)} onKeyDown={keyboardSubmit}/><br/>
            <input type="button" id="thumb_up" className="thumb_up" onClick={UpVote}/>
            <input type="button" id="submit" onClick={Submit} value="Submit"/>
            <input type="button" id="addResponse=" onClick={AddResponse} value="Add Response"/>
            <input type="button" id="thumb_down" className="thumb_down" onClick={DownVote}/>
        </form>

        <br/>
      </div>
      <br/>
    </main>
  )
}

export default ChatbotPage