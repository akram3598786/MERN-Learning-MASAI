import { ADD_TODO, DEC_COUNT, INC_COUNT } from "./Action-types";
import { addtodo } from "./Action";

const initialstate = {
    counter : 0,
    todos : [],
};

export const reducer=(state = initialstate, action)=>{
    switch (action.type) {
        case ADD_TODO:{
            return {
              ...state,todos : [...state.todos, action.payload],
            } 
        }
        case INC_COUNT : {
            return {
                ...state, counter : state.counter + action.payload,
            }
        }
        case DEC_COUNT : {
            return {
                ...state, counter : state.counter - action.payload,
            }
        }
        default:
            return state;
    }
}