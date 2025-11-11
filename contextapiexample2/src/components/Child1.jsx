import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../App'

const Child1 = () => {
    const user = useContext(UserContext);
  return (
    <div>age : {user.age}</div>
  )
}

export default Child1