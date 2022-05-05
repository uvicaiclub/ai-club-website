import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from './domain/home_page';
import AboutPage from './domain/about_page';
import ContactPage from './domain/contact_page';
import ResourcePage from './domain/resources_page';
import ProjectPage from './domain/projects_page';
import ChatbotPage from './domain/chatbot_page';

import Header from './components/header';
import Footer from './components/footer';

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
