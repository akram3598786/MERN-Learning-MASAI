import { useState } from "react"

let obj = {
    email : "",
    password:  ""
}
export default function Login(){
  const [formData, setformData] = useState(obj);

    const handleSubmit=()=>{
       console.log(formData);
    }
    const handleChange=(e)=>{
        let {name,value } = e.target;
        setformData({...formData, [name] : value});
    }
    let {email, password} = formData;
    
    return (
        <>
          <h2>Login Form</h2>
          <input type="email" value={email} name="email" id="" placeholder="Enter Email" onChange={handleChange}/>
          <input type="password" value={password} name="password" id="" placeholder="Enter Password" onClick={handleChange}/>
          <button onClick={handleSubmit}>Login</button>
        </>
    )
}