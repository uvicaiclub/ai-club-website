import battlesnake from "./arena_champs.png"

const Projects = () => {

  return (
    <div>
      
      <div className="pt-2">
        <div className="h2">Battlesnake</div>
        <p>The UVic AI Club's submission for the 2020 <a href="https://play.battlesnake.com/">Battlesnake</a> Stay Home and Code event was very successful. Of over 80 very talented contestants, we became the rookie league arena champions!</p>
        <img src={battlesnake} alt="UVic AI Club" width="750" className="pb-3 mw-100"/>
        <p>The next step will be to attend Battlesnake 2021 under the veteran division. We plan to make significant improvements to our design which will aid us in performing better during the tournament portion of the competition.</p>
      </div>

      <div className="pt-2">
        <div className="h2">Chatbot</div>
        <p>Our home made <a href="/chatbot">chatbot</a> is designed to add more value to our website. Our model was inspired by the Russian chatbot <a href="http://p-bot.ru/en/index.html">p-bot</a>. We are currently developing the database to house and sort responses and behaviours.</p>
      </div>

      <div className="pt-2">
        <div className="h2">Neurotech</div>
        <p>The UVic AI Club has been invited to work in collaboration with the UVic Neurotech Club to participate in the 2020 Neurotech competition. Currently, we are working to model neurological data collected through sensors to determine thresholds of concentration. Check out the <a href="https://neurotechx.com/">Neurotech</a> website for more details.</p> 
      </div>

    </div>
  )
}

export default Projects