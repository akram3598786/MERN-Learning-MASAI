
import { useState } from "react";
import ChildFun from "./Child";
import Child2_Fun from "./Child2";
export default function Child_ParentFun(){
 const [cnt, setcnt] = useState(0);
 console.log("btn clicked")
  return (
  <div>
    <h1> Child to Parent example</h1>
   
    <h3>Count : {cnt}</h3>
    
    <ChildFun Increament = {setcnt}/>
    <Child2_Fun decrement = {setcnt}/>
  </div>
  );
}