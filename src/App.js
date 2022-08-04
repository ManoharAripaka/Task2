import React from 'react';
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import './App.css'
import Suggest from './Components/Suggest/Suggest';

export default function App() {
  
  return (
    <div className='app'>
      <Header />
      <Suggest />
      <Body />
    </div>
  )
}
