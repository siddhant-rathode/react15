import React, { useState } from 'react'

const App = () => {

  const [user, setuser] = useState('')

  const SumbitHandler = (e) => {
    e.preventDefault();
    const {firstname, lastname, username, contact, email} = e.target;
    
    const user = {
      username: username.value,
      lastname: lastname.value,
      email: email.value,
      contact: contact.value
    }
    console.log(user);

  };

  return (
    <div>
      <form onSubmit={SumbitHandler}>

      <input className='my-5 bg-gray-500' type="text" name='firstname' placeholder='firstname' /> <br />
      <input className='my-5 bg-gray-500' type="text" name='lastname' placeholder='lastname' /> <br />
      <input className='my-5 bg-gray-500' type="text" name='username' placeholder='username' /> <br />
      <input className='my-5 bg-gray-500' type="text" name='email' placeholder='email' /> <br />
      <input className='my-5 bg-gray-500' type="text" name='contact' placeholder='contact' /> <br />
      <button className='bg-red-400'>submit</button>
      
      </form>
      
    </div>
  )
}

export default App