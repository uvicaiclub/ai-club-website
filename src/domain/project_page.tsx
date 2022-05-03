import battlesnake from "../images/arena_champs.png"

const ProjectPage = () => {

  return (
    <main>
      <br/>
      <h2>Battlesnake:</h2>
      <p>The UVic AI Club's submission for the 2020 <a href="https://play.battlesnake.com/">Battlesnake</a> Stay Home and Code event was very successful. Of over 80 very talented contestants, we became the rookie league arena champions!</p>
      <br/>
      <img src={battlesnake} alt="UVic AI Club" className="winner"/><br/>
      <p>The next step will be to attend Battlesnake 2021 under the veteran division. We plan to make significant improvements to our design which will aid us in performing better during the tournament portion of the competition.</p>
      <br/>
      <h2>Chatbot:</h2>
      <p>Our home made <a href="chatbot.html">chat-bot</a> is designed to add more value to our website. Our model was inspired by the Russian chat-bot <a href="http://p-bot.ru/en/index.html">p-bot</a>. We are currently developing the database to house and sort responses and behaviours.</p>
      <br/>
      <h2>Neurotech:</h2>
      <p>The UVic AI Club has been invited to work in collaboration with the UVic Neurotech Club to participate in the 2020 Neurotech competition. Currently, we are working to model neurological data collected through sensors to determine thresholds of concentration. Check out the <a href="https://neurotechx.com/">Neurotech</a> website for more details.</p> 
    </main> 
  )
}

export default ProjectPage