import { useDispatch, useSelector } from "react-redux";
import { AddCount, DecCount } from "../Redux setup/Action";

export const Counter=()=>{

    const dispatch = useDispatch();
    const counter = useSelector((state)=>state.counter)

   const HandleIncre=()=>{
        dispatch(AddCount(1));
   }
   const HandleDeccre=()=>{
        dispatch(DecCount(1));
   }

    return (
       <div>
        <h1>{counter}</h1>
        <button onClick={()=>HandleIncre()}>Increment</button>
        <button onClick={()=>HandleDeccre()}>Decrement</button>
        </div>
    );
}