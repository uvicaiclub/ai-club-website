import { BrowserRouter as Switch, Route } from "react-router-dom";
import HomePage from './Domain/HomePage';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
{/*      <Route path="/dashboard" component={DashboardPage} />
*/}    </Switch>  
  );
}

export default App;
