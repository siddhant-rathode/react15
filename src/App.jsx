import { useState } from "react"

const App = () => {

  // two way binding....

  const [username, setusername] = useState("")

  const SubmitHandler = (e) => {
    e.preventDefault()
    console.log(username);  
  }

  const [error, seterror] = useState(false)
  // const InputHandler = (e) => {
  //   e.target.value.length < 5 ? seterror(true) : seterror(false)
  // }

  return (
    <div className="p-5 bg-gray-300">
      <form onSubmit={SubmitHandler}>
      <input className=" rounded " type="username" name="username" placeholder="username"
       onChange={(e) => setusername(e.target.value)}
       onInput={(e) => e.target.value.length < 5 ? seterror(true) : seterror(false)}
       value={username}/>

       {error && (
        <p className="text-red-600">username must be minimum 5 character</p>
       )}
       <br />
      <button className="rounded bg-blue-700 p-0.5 text-white mt-2">submit</button>
      </form>
    </div>
  )
}

export default App
