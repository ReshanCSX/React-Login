import { useState } from "react"
import './App.css'


export default function App(){

  const [userInfo, setUserInfo] = useState({username: '', password: '', checked: false})

  function handleChange(event){

    const {name, value, type, checked} = event.target

    setUserInfo(prevFormData => ({
      ...prevFormData,
      [name] : type === "checkbox" ? checked : value
    }))
  }

  function handleSubmit(event){
    event.preventDefault()

    console.log(userInfo)
  }

  return(
    <div id="form--container">
      <h4 className="form--heading">Sign In</h4>

      <form className="form" onSubmit={handleSubmit}>
        <input type="text" className="form--input"  placeholder="Username" name="username" onChange={handleChange} value={userInfo.username}/>
        <input type="password" className="form--input"  placeholder="Password" name="password" onChange={handleChange} value={userInfo.password}/>
        
        <input id="checkbox" type="checkbox" className="form--checkbox"  onChange={handleChange} name="checked" checked={userInfo.checked}/>
        <label htmlFor="checkbox">Remember Me</label>

        <button className="form--button">Login</button>
      </form>
    </div>
  )
}