import { useState } from "react";
import "./Todo-module.css";
import { addtodo } from "../Redux setup/Action";
import { useDispatch } from "react-redux";
import {v4 as uuid } from "uuid";
import {reducer} from "../Redux setup/Reducer"


 
export default function TodoInput(){
 
    const [title,settitle]  = useState("");
   const dispatch = useDispatch();
     const handlesubmit=()=>{
        let payload ={
             title : title,
             sts : false,
             id : uuid()
        }
        dispatch(addtodo(payload));
     }

    return (
      <div className="center">
        <h1>Add todo</h1>
        <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} />
        <button onClick={handlesubmit}>Add Todo</button>
      </div>
    );

}