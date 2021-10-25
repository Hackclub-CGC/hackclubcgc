// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus'
import Events from './Pages/Events'
import Projects from './Pages/Projects'
import Resources from './Pages/Resources'
import Team from './Pages/Team'
import Contactus from './Pages/Contactus'

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
    <NavBar />
    <Switch>
          <Route path="/contactus">
            <Contactus />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/aboutus">
            <Aboutus />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/Events">
            <Events />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
