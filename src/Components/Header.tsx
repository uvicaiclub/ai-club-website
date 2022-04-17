import { Link } from "react-router-dom"
import "../styles/style.css"

interface HeaderProps {
    forceRefreshToggle?: () => void;
}

const Header = (props: HeaderProps) => {

  return (  
    <div>
        <img src="./images/banner.png" className="banner" alt="UVic AI Club" />       
        <header>
            <div className="link_bar">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/resource">Resources</Link></li>
                        <li><Link to="/chatbot">ChatBot</Link></li>                        
                        <li><Link to="/contact">Contact</Link></li>                        
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  );
}

export default Header;
