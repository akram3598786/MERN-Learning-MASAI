 import { ADD_TODO, INC_COUNT, DEC_COUNT } from "./Action-types"

    export const addtodo = (data)=>( 
       {
       type : ADD_TODO,
       payload : data,
     }
    );

    export const AddCount = (data)=>{
       return {
            type : INC_COUNT,
            payload : data
        }
    }

    export const DecCount = (data)=>{
       return {
            type : DEC_COUNT,
            payload : data
        }
    }
