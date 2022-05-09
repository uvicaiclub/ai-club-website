import "./chatbot.css"
import { useState } from "react"
import { AddResponse, DownVote, Submit, UpVote } from "./chatbot_db"

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

  function setPUI(input: string) {
    const pui = document.getElementById("previous_user_input")?.innerHTML
    if(pui) setPreviousUserInput(pui)
  }

  return (
    <div className="text-center">

      <div className="h2">UVic AI Club Chatbot</div>
      <div className="d-flex justify-content-center">
        <div>
          You:
          <div id="previous_user_input" className="pb-4"><br/></div>
          Chatbot:
          <div id="response" className="pb-4"><br/></div>
          
          <form id="chat" method="post" style={{textAlign: "center"}}>
            <input name="user_input" id="user_input" type="text" onChange={e => setUserInput(e.target.value)} onKeyDown={keyboardSubmit}/><br/>
              <input type="button" id="thumb_up" className="thumb_up" onClick={() => UpVote(previousUserInput)}/>
              <input type="button" id="submit" onClick={() => setPUI(Submit(userInput))} value="Submit"/>
              <input type="button" id="addResponse=" onClick={() => AddResponse(userInput, previousUserInput)} value="Add Response"/>
              <input type="button" id="thumb_down" className="thumb_down" onClick={() => DownVote(previousUserInput)}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChatbotPage