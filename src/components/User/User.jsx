import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  //useparams se hame userid mil jayegi
    const {userid} = useParams()
  return (
    // iiss component ke aandar hame id mil jayegi
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User