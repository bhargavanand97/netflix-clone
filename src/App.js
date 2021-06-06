import React, { useEffect } from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import HomeScreen from './components/homescreen/HomeScreen';
import './App.scss';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginScreen from './components/loginscreen/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import ProfileScreen from './components/profilescreen/ProfileScreen';

const TITLE = 'Netflix-Clone';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        //Logged in
       
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }
      else {
        //Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;    
  }, [dispatch]);

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
          <Route exact path="/profile">     
            <ProfileScreen />
          </Route>
        </Switch>
     )}
    </Router>
    </div>
  );
}

export default App;
