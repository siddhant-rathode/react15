import { useState } from "react"

const App = () => {
  
  const [user,setuser] = useState("jhon")
  
  const changeuser = () => {
    setuser("jhony")
  };
  console.log(user);


  return (
    <div>
      <h1 className="m-5 text-3xl font-bold ">{user}</h1>
      <button onClick={changeuser} className="p-1 m-3 bg-gray-500" >click on button</button>
    </div>
  )
}

export default App