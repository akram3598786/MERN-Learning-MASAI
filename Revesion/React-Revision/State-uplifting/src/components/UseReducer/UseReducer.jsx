import { useReducer } from "react";

const intialState = 0;
const reducer=(state, type)=>{
   switch(type){
     case "incre": return state+1;
     case "decre": return state-1;
     case "reset": return intialState;
     default: return state;
   }
}
export default function UseReeducer(){

    const[count, dispatch] = useReducer(reducer,intialState);
    
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={()=>dispatch("incre")}>Increment</button>
            <button onClick={()=>dispatch("decre")}>Deccrement</button>
            <button onClick={()=>dispatch("reset")}>Reset</button>
        </div>
    )
}