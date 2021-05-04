import React, { useState,useRef } from 'react'
import './App.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import {db} from './config'
// import { useCollectionData } from 'react-firebase-hooks/firestore';
import {Login,auth} from './Components/Login';
import SendMessage from './Components/SendMessage/SendMessage';




function App() {
  const [user]= useAuthState(auth);

  return (
    <div className="App">
      <SendMessage />
      {/*user ?
      <>
      <h1>hello</h1>
      <SendMessage />
      </> : 
      <>
        <Login />
      </>*/}
    </div>
  )
}

export default App
