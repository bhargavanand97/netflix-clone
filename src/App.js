import React from 'react';
// import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import HomeScreen from './components/homescreen/HomeScreen';
import './App.scss';
import { Helmet } from 'react-helmet';

const TITLE = 'Netflix-Clone';
function App() {
  
  return (
    <div className='app'>
       <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      <HomeScreen />
    </div>
  );
}

export default App;
