import React from 'react';
// import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import HomeScreen from './components/homescreen/HomeScreen';
import './App.scss';

function App() {
  return (
    <div className='app'>
      <HomeScreen />
    </div>
  );
}

export default App;
