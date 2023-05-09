import React from 'react'
import { useState, useEffect } from 'react'

function Users() {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('http://3.123.16.12/web/api/code')
        .then(response => response.json())
        .then (json => setData(json))
        .catch(error => console.log(error));

        
    },[])
    
  return (
    <div>
        <h1 className='text-center text-lg'>view all the users</h1>
        {data.map(user =>{
            <div key={user.id}>
            {user.firstName}
            {user.lastName}
            </div>
        })}
        
      
    </div>
  )
}

export default Users
