import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from '../domain/home_page/home_page';
import AboutPage from '../domain/about_page/about_page';
import ContactPage from '../domain/contact_page/contact_page';
import ResourcesPage from '../domain/resources_page/resources_page';
import ProjectPage from '../domain/projects_page/projects_page';
import ChatbotPage from '../domain/chatbot_page/chatbot_page';
import NotFoundPage from "../domain/not_found_page/not_found_page";

import Header from '../components/header/header';
import Footer from '../components/footer/footer';

import "./app.css"

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
          <Route path="/resources" component={ResourcesPage} />
          <Route path="/chatbot" component={ChatbotPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
