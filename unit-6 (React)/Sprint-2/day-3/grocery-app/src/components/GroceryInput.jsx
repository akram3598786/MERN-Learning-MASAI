import "./Common.css";
import React from "react";


export default function GroceryInput({handleInput}){
const [Gname,setGname] = React.useState("");
const [price,setprice] = React.useState("");



  return   <div id="GroceryInputBox">
    <h1>Add Grocery</h1>
        <label htmlFor="">Grocery Name : 
     <input type="text" value={Gname} name="" onChange={(e)=>setGname(e.target.value)} id="name" placeholder=""/>
    </label>
    <br />
    <label htmlFor="">Price :
     <input type="text" value={price} name="" onChange={(e)=>setprice(e.target.value)} id="price" placeholder="Rs." />
    </label>
    <br />
    <button id="submitBtn" onClick={()=>handleInput(Gname,price)}>ADD</button>
    </div>
}