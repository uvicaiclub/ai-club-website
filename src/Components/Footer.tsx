import { PartialTheme, Stack } from '@fluentui/react';
import "../styles/style.css"

interface FooterProps {
    forceRefreshToggle?: () => void;
    // setTheme?: (theme: PartialTheme) => void; 
}


const Footer = (props: FooterProps) => {

  return (  
    <footer>
        <h5>® 2019</h5>
    </footer>
  );
}

export default Footer;
