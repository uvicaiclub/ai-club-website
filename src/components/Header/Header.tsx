import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  // prettier-ignore
  return (  
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/chatbot">ChatBot</Link></li>                        
          <li><Link to="/contact">Contact</Link></li>                        
        </ul>
      </nav>
    </header>
  )
}

export default Header
