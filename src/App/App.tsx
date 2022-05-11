import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from '../domains/Home';
import About from '../domains/About';
import Chatbot from '../domains/Chatbot';
import Contact from '../domains/Contact';
import Project from '../domains/Projects';
import NotFound from "../domains/NotFound";
import Resources from '../domains/Resources';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from "../components/Banner";

import "./app.css"

function App() {
  return (
    <Router>
      <div style={{height: "auto"}}>
        <Banner/>
        <Header/>
      </div>
      <div className="overflow-auto" style={{height: "auto"}}>
        <main className="d-flex justify-content-center pt-3">
          <div className="main-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/projects" component={Project} />
              <Route path="/resources" component={Resources} />
              <Route path="/chatbot" component={Chatbot} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
