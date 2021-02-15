import logo from './googlelogo_color_272x92dp.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages/home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
