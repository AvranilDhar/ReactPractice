import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../App'

const Child3 = () => {
    const user = useContext(UserContext);
  return (
    <div>roll : {user.roll}</div>
  )
}

export default Child3