import { useState } from "react"
import Youtube from "../../components/YouTube"

const Home = () => {

  // Wait until to the webpage is loaded to display iframe
  const [youtube, setYoutube] = useState(false)
  window.onload = () => {
    setYoutube(true)
  }

  return (
    <div>
      <main>
        <br/>
        <p> Welcome to the UVic AI Club website! The UVic AI club is an official club recognised by both the University of Victoria's Student Society (UVSS) and Engineering Student Society (ESS).</p>
        <br/>
        {youtube && 
        <Youtube/>}
        <br/>
        <p> The preceding video is by Two Minute Papers and illustrates the advancements in AI research. The techniques and tools used here are based around neural networks which is evident from the iterations required to teach the agents. It's interesting how these types of AI agents seem to find unintended ways of winning the game. This technology could lead to solutions that human agents can not find.</p>
      </main>
    </div>
  )
}

export default Home