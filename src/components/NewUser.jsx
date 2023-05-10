import React, { useState } from 'react'

function NewUser() {

    const [firstName, setFirstName] = useState('');
    const[ lastName, setLastName] = useState('');
    const[ message, setMessage] = useState('')

    const handleRegister =(e) =>{
        e.preventDefault();

        fetch('http://52.59.33.40/web/api/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer 2XNVmuH2YVhYvVGgh4YkV9m6ph4c8CxMMX6UzeeDh7LJTmgdLk4Fz38QLwFt3sSY6BHkCeK8B3Jhgt23Q4dX6A3pmFRMGnJejwDg'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName
            })
        })
        .then(response =>{
            if(response.ok){
                setFirstName("");
               setLastName("");
            }else{
                setMessage("error occured")
            }

        })
        .catch(error =>{
            console.log(error)

        });

    }
  return (
    <div className=''>
        <h1 className='text-lg text-center mb-8'>Register New users</h1>
        <div>
            <form className='rounded-lg shadow-lg w-full max-w-sm px-8 pt-6 pb-8 mx-auto'onSubmit={handleRegister}>
                
                <label className='text-sm font-bold text-gray-700 mb-4' >Firstname</label>
                <input className='shadow apperance-none border rounded w-full py-3 px-3 text-gray-700 mb-2'value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                <label className='text-sm font-bold text-gray-700 mb-4'>Lastname</label>
                <input className='shadow apperance-none border rounded w-full py-3 px-3 text-gray-700 mb-2' type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                <button className='bg-blue-700 rounded-lg px-3 py-3 text-white hover:bg-blue-300'>Submit</button>
                 

            </form>

        </div>
      
    </div>
  )
}

export default NewUser
