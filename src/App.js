import React from "react";
import Home from './Home/Home'
import Header from "./Header/Header";
import SignIn from './SignIn/SignIn'
// import Side from './Side/Side'
import SignUp from './SignUp/SignUp'
import Search from './Search/Search'
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
      </Switch>
    </Router>
  );
}
export default App;