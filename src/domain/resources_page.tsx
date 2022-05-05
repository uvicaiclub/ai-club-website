import aibook from "../resources/Artificial Intelligence A Modern Approach.pdf"
import datamining from "../resources/Mining of Massive Datasets.pdf"
import growinggans from "../resources/Progressive Growing of Gans for Improved Quality, Stability, and Variation.pdf"
import adversarial from "../resources/UNSUPERVISED REPRESENTATION LEARNING WITH DEEP CONVOLUTIONAL GENERATIVE ADVERSARIAL NETWORKS.pdf"
import nnevaluation from "../resources/Using Neural Networks For Evaluation in Heuristic Search Algorithm.pdf"

const ResourcesPage = () => {

  return (
    <main>
      <br/>
      <h2>Repositories</h2>
      <p> <a target="_blank" rel="noreferrer" href="https://github.com/uvicaiclub">UVic AI Club</a><br/>
      This is the UVic AI Club GitHub repository. It contains all the software being developed by the club.</p>
      <p><a target="_blank" rel="noreferrer" href="https://github.com/aimacode">Aimacode</a><br/>
      This repository was developed for use with the book  "Artificial Intelligence: A Modern Approach". It is used extensively in the introductory AI course (CSC 421) taught at UVic.</p>
      <br/>
      <h2>Videos</h2>
      <p><a target="_blank" rel="noreferrer" href="https://www.youtube.com/user/keeroyz/">Two Minute Papers</a><br/>
      These videos are very professional and rooted in academic papers. The articles presented are clear, concise, and cutting edge.</p>
      <p><a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC0e3QhIYukixgh5VVpKHH9Q">Code Bullet</a><br/>
      This fellow is a little vulgar, however he is also very good at explaining problems and solutions.</p>
      <br/>
      <h2>Books</h2>
      <p><a target="_blank" rel="noreferrer" href={aibook}>Artificial Intelligence: A Modern Approach</a></p>
      <p><a target="_blank" rel="noreferrer" href={datamining}>Mining of Massive Datasets</a></p>
      <br/>
      <h2>Papers</h2>
      <p><a target="_blank" rel="noreferrer" href={growinggans}>Progressive Growing of Gans of Gans for Improved Quality, Stability, and Variation</a></p>
      <p><a target="_blank" rel="noreferrer" href={adversarial}>Unsupervised Representation Learning With Deep Convolutional Generative Adversarial Networks</a></p>
      <p><a target="_blank" rel="noreferrer" href={nnevaluation}>Using Neural Networks for Evaluation in Heuristic Search Algorithms</a></p>
    </main>
  )
}

export default ResourcesPage