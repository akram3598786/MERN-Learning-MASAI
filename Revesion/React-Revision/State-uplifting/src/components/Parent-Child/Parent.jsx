import { useState } from "react"
import { Child } from "./Child";

export default function Parent_Childfun(){
const [count, setcount] = useState(0);
  const handleClick=()=>{
    setcount((prev)=>prev+1)
  }

  return (
    <div>
      <h1>Parent to Child example</h1>
      <button onClick={handleClick}>Increase</button>
      <Child count = {count} />
    </div>
  )
}