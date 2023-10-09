import React, { useState,useEffect } from 'react'

const Users = () => {
const [data , setdata] = useState()
useEffect(() => {
    setdata(data+1)
    
},)
  return (
    <div>
      <input type='text' value={data} onChange={(e)=>{setdata(e.target.value)}}/>
      {data}
    </div>
  )
}

export default Users
