import { useState } from "react"

const App = () => {

  // two way binding....

  const [username, setusername] = useState("")

  // const ChangeHandler = (e) => { 
  //   setusername(e.target.value)
  // }
  const SubmitHandler = (e) => {
    e.preventDefault()
    console.log(username);
    
  }



  return (
    <div className="p-5 bg-gray-600">
      <form onSubmit={SubmitHandler}>
      <input className=" rounded " type="username" name="username" placeholder="username"
       onChange={(e) => setusername(e.target.value)}
       value={username}/>
       <br /><br />
      <button className="rounded bg-blue-700 p-0.5 text-white">submit</button>
      </form>
    </div>
  )
}

export default App
