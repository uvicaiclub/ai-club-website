import "../styles/chatbot.css"
import { useState } from "react"
import { AddResponse, DownVote, Submit, UpVote } from "../Utilities/Chatbot_DB"

const ChatbotPage = () => {

  const [userInput, setUserInput] = useState('')
  const [previousUserInput, setPreviousUserInput] = useState('')

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
            <input type="button" id="thumb_up" className="thumb_up" onClick={() => UpVote(previousUserInput)}/>
            <input type="button" id="submit" onClick={() => setPreviousUserInput(Submit(userInput))} value="Submit"/>
            <input type="button" id="addResponse=" onClick={() => AddResponse(userInput, previousUserInput)} value="Add Response"/>
            <input type="button" id="thumb_down" className="thumb_down" onClick={() => DownVote(previousUserInput)}/>
        </form>

        <br/>
      </div>
      <br/>
    </main>
  )
}

export default ChatbotPage