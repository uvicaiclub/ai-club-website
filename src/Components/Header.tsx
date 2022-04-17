import { PartialTheme, Stack } from '@fluentui/react';
import "../styles/style.css"

interface HeaderProps {
    forceRefreshToggle?: () => void;
    // setTheme?: (theme: PartialTheme) => void; 
}


const Header = (props: HeaderProps) => {

  return (  
    <div>
        <img src="./images/banner.png" className="banner" alt="UVic AI Club" />       
        <header>
            <div className="link_bar">
                <nav>
                    <ul>
                        <li><a href="index.html">home</a></li>
                        <li><a href="/content/about.html">about</a></li>
                        <li><a href="/content/projects.html">projects</a></li>
                        <li><a href="/content/resources.html">resources</a></li>
                        <li><a href="/content/chatbot.html">Chatbot</a></li>
                        <li><a href="/content/contact.html">contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  );
}

export default Header;
