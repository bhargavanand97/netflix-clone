import React from 'react';
// import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import HomeScreen from './components/homescreen/HomeScreen';
import './App.scss';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginScreen from './components/loginscreen/LoginScreen';

const TITLE = 'Netflix-Clone';
const user = false;
function App() {
  
  return (
    <div className='app'>
       <Helmet>
          <title>{ TITLE }</title>
        </Helmet>   
      <Router>  
        {!user ? (<LoginScreen/>):(
        <Switch>         
          <Route exact path="/">     
            <HomeScreen />
          </Route>
        </Switch>
     )}
    </Router>
    </div>
  );
}

export default App;
