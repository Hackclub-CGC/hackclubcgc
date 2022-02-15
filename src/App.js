// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Events from './Pages/Events'
import Projects from './Pages/Projects'
import Resources from './Pages/Resources'
import Team from './Pages/Team'
import Contactus from './Pages/Contactus'
import Footer from './Components/Footer'



import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
    <NavBar />
    <Switch>
          <Route exact path="/contactus">
            <Contactus />
          </Route>
          <Route exact path="/resources">
            <Resources />
          </Route>
          
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/Events">
            <Events />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
     <Footer/>   
    </Router>
    </>
  );
}

export default App;
