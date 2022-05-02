import { JaccardThreshold, ratingPick, ShowRating, Tokenize } from "./Chatbot"
import * as $ from 'jquery'

interface chatbot {
  user_input: string
  response: string
  rating: number
}

let response = ""
let responded = false
const unknown = "I don't understand"

//Runs when the submit button is pressed
export const Submit = (userInput: string) : string => {

  //Do not submit blank responses
  if(userInput === "") return ""

  // Update the previous user input field
  const previousUserInputObj = document.getElementById('previous_user_input')
  if(previousUserInputObj) previousUserInputObj.innerHTML = userInput
  
  //Enable voting and responses
  responded = true

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
    return userInput
  })
  return ""
}

//Runs when the add response button is pressed
export const AddResponse = (userInput: string, previousUserInput: string) => {

  //checks and prevents spam
  if((responded === false) || (userInput === "")) return
  responded = false

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
export const UpVote = (previousUserInput: string) => {

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
export const DownVote = (previousUserInput: string) => {

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