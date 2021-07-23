import React from "react";
import Home from './Components/Home/Home'
import Header from "./Components/Header/Header";
// import Privateroutes from "./"
import PrivateRoutes from './HOC/PrivateRoutes'
import SignIn from './Components/SignIn/SignIn';
import Dashboard from './Components/Dashboard/Dashboard'
import './App.css'
import SignUp from './Components/SignUp/SignUp'
import Search from './Components/Search/Search'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact path='/'>
        <Header />
          <Home />
        </Route>
        <Route exact path='/search'>
        <Header />
        <Search/>
        </Route>
        <Route exact path='/signIn'>
        <SignIn />
        </Route>
        <Route exact path='/signUp'>
        <SignUp />
        </Route>
        <PrivateRoutes exact path='/dashboard' component={Dashboard} />
        
      </Switch>
    </Router>
  );
}
export default App;