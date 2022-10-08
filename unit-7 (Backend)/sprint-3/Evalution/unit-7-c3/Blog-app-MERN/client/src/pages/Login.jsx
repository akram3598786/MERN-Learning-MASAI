import React, { useState } from 'react'
import axios from 'axios'
function Login() {
    const [formData, setFormData] = useState({});


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }


    const handleSubmit = async () => {
        console.log(formData)
        const {data} = await axios.post("http://localhost:8080/auth/login", formData)
        localStorage.setItem("userId", data.user[0]["_id"])
    }
  return (
    <div>
        <input type="text" onChange={handleChange} name="username" placeholder='Enter User Name'/>
        <input type="text" onChange={handleChange} name="password" placeholder='Enter Password'/>
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login