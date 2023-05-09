import React from 'react'
import { useState, useEffect } from 'react'

function Users() {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://wise-ledger-hosted.fly.dev/sales')
        .then(response => response.json())
        .then (json => setData(json))
        .catch(error => console.log(error));

        
    },[])
    
  return (
    <div className='text-center'>
        <h1 className='text-center text-lg mb-12'>view all the users</h1>
        
        {data.map((user) => 
          <div key={user.id}>
             {user.date}
           </div>
        )}


          
        
      
    </div>
  )
}

export default Users
