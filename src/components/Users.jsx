import React from 'react'
import { useState, useEffect } from 'react'

function Users() {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('http://52.59.33.40/web/api/code')
        .then(response => response.json())
        .then (json => setData(json))
        .catch(error => console.log(error));

        
    },[])
    
  return (
    <div className='text-center'>
        <h1 className='text-center text-lg mb-12'>view all the users</h1>
        
        {data.map((user) => 
          <div key={user.id}>
             {user.firstName}
             {user.lastName}
           </div>
        )}


          
        
      
    </div>
  )
}

export default Users
