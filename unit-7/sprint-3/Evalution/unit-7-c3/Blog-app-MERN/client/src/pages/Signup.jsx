import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }


    const handleSubmit = async () => {
        formData.blogs = [];
        const {data} = await axios.post("http://localhost:8080/auth/signup", formData)
        if(data._id){
            navigate("/login")
        }
        else{
           alert("Write All the fields") 
        }
    }
  return (
    <div>
        <input type="text" onChange={handleChange} name="name" placeholder='Enter Name'/>
        <input type="text" onChange={handleChange} name="email" placeholder='Enter Email'/>
        <input type="text" onChange={handleChange} name="username" placeholder='Enter User Name'/>
        <input type="text" onChange={handleChange} name="password" placeholder='Enter Password'/>
        <input type="text" onChange={handleChange} name="mobile" placeholder='Enter Mobile Number'/>
        <button onClick={handleSubmit}>Signup</button>
    </div>
  )
}

export default Signup