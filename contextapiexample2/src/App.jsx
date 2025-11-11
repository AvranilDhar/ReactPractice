import React from 'react'
import {createContext } from 'react';
import Child1 from './components/Child1';
import { useState } from 'react';
import Child2 from './components/Child2';
import Child3 from './components/Child3';


export const UserContext = createContext();

// const UserContextProvider = UserContext.Provider();


const App = () => {
  const [user,setUser] = useState({name : "Love" , age : 11 , roll : 56})
  return (
    <>
      <UserContext.Provider value={user}>
        <Child2/>
        <Child1/>
        <Child3/>
      </UserContext.Provider>
    </>
  )
}

export default App