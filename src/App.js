import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import AddTeams from './components/AddTeams';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditUser from './components/EditUser';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
         <Route path='/' exact component={Home}/>
          <Route path='/all' exact component={AllUsers}/> 
          <Route path="/add" exact component={AddTeams}/>
          <Route path='/edit/:id' exact component={EditUser}/>
          
       </Switch>  
    </div>
    </Router>
  );
}

export default App;
