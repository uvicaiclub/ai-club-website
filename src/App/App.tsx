import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from '../domains/Home';
import About from '../domains/About';
import Contact from '../domains/Contact';
import Resources from '../domains/Resources';
import Project from '../domains/Projects';
import Chatbot from '../domains/Chatbot';
import NotFound from "../domains/NotFound";

import Header from '../components/Header';
import Footer from '../components/Footer';

import "./app.css"

function App() {
  return (
    <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Project} />
          <Route path="/resources" component={Resources} />
          <Route path="/chatbot" component={Chatbot} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
