import aibook from './PDF/Artificial Intelligence A Modern Approach.pdf'
import datamining from './PDF/Mining of Massive Datasets.pdf'
import growinggans from './PDF/Progressive Growing of Gans for Improved Quality, Stability, and Variation.pdf'
import adversarial from './PDF/UNSUPERVISED REPRESENTATION LEARNING WITH DEEP CONVOLUTIONAL GENERATIVE ADVERSARIAL NETWORKS.pdf'
import nnevaluation from './PDF/Using Neural Networks For Evaluation in Heuristic Search Algorithm.pdf'

const Resources = () => {
  return (
    <div>
      <div className='pt-2'>
        <div className='h3'>Repositories</div>
        <p> <a target='_blank' rel='noreferrer' href='https://github.com/uvicaiclub'>UVic AI Club</a>: This is the UVic AI Club GitHub repository. It contains all the software being developed by the club.</p>
        <p><a target='_blank' rel='noreferrer' href='https://github.com/aimacode'>Aimacode</a>: This repository was developed for use with the book  'Artificial Intelligence: A Modern Approach'. It is used extensively in the introductory AI course (CSC 421) taught at UVic.</p>
      </div>
      
      <div className='pt-2'>
        <div className='h3'>Courses</div>
        <p><a target='_blank' rel='noreferrer' href='https://www.simplilearn.com/resources/artificial-intelligence-machine-learning'>Simplilearn</a>: A free collection of articles, ebooks, webinars, video tutorials, and practice tests related to AI & machine learning.</p>
      </div>

      <div className='pt-2'>
        <div className='h3'>Videos</div>
        <p><a target='_blank' rel='noreferrer' href='https://www.youtube.com/user/keeroyz/'>Two Minute Papers</a>: These videos are very professional and rooted in academic papers. The articles presented are clear, concise, and cutting edge.</p>
        <p><a target='_blank' rel='noreferrer' href='https://www.youtube.com/channel/UC0e3QhIYukixgh5VVpKHH9Q'>Code Bullet</a>: This fellow is a little vulgar, however he is also very good at explaining AI problems and solutions.</p>
      </div>

      <div className='pt-2'>
        <div className='h3'>Books</div>
        <p><a target='_blank' rel='noreferrer' href={aibook}>Artificial Intelligence: A Modern Approach</a></p>
        <p><a target='_blank' rel='noreferrer' href={datamining}>Mining of Massive Datasets</a></p>
      </div>

      <div className='pt-2'>
        <div className='h3'>Papers</div>
        <p><a target='_blank' rel='noreferrer' href={growinggans}>Progressive Growing of Gans of Gans for Improved Quality, Stability, and Variation</a></p>
        <p><a target='_blank' rel='noreferrer' href={adversarial}>Unsupervised Representation Learning With Deep Convolutional Generative Adversarial Networks</a></p>
        <p><a target='_blank' rel='noreferrer' href={nnevaluation}>Using Neural Networks for Evaluation in Heuristic Search Algorithms</a></p>
      </div>
    </div>
  )
}

export default Resources
