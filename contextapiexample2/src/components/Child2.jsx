import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../App'

const Child2 = () => {
    const user = useContext(UserContext);
  return (
    <div>name : {user.name}</div>
  )
}

export default Child2