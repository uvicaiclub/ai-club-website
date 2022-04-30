import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from './Domain/HomePage';
import AboutPage from './Domain/AboutPage';
import ContactPage from './Domain/ContactPage';
import ResourcePage from './Domain/ResourcePage';
import ProjectPage from './Domain/ProjectPage';
import ChatbotPage from './Domain/ChatbotPage';

import Header from './Components/Header';
import Footer from './Components/Footer';

import "./styles/app.css"

function App() {
  return (
    <>
    <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/resource" component={ResourcePage} />
          <Route path="/chatbot" component={ChatbotPage} />
        </Switch>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
