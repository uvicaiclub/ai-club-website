import Youtube from '../../components/Youtube'

const Home = () => {
  return (
    <div>
      <div>
        Welcome to the UVic AI Club website! The UVic AI club is an official
        club recognised by both the University of Victoria's Student Society
        (UVSS) and Engineering Student Society (ESS).
      </div>

      <Youtube />

      <div>
        The preceding video is by Two Minute Papers and illustrates the
        advancements in AI research. The techniques and tools used here are
        based around neural networks which is evident from the iterations
        required to teach the agents. It's interesting how these types of AI
        agents seem to find unintended ways of winning the game. This technology
        could lead to solutions that human agents can not find.
      </div>
    </div>
  )
}

export default Home
