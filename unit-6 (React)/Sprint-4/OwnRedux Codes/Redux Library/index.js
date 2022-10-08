import { createStore } from "redux";

// {type : "INC_COUNT",payload : 1 }  ===> action
// state = {count : 0, todo : []}     ===> Inyial state
const reducer=(state,action)=>{
//   we can do this by if , else conditions 

// Note : We can't change thr state directly (becoz its ready only) then need 
// of impure function written below which return a new statw instead updateing the prior state;
    switch(action.type){
        case "INC_COUNT" : {
            return {...state, count : state.count + action.payload};
        }
        case "DEC_COUNT" : {
            return {...state, count : state.count - action.payload};
        }
        case "ADD_TODO" : {
            return {...state, todo : [...state.todo,...action.payload]};
        }
        default : {
            return state;
        }
    }
}

/*
class Store {

    constructor(reducer, intialState){
        this.reducer = reducer;
        this.state = intialState;
    }

      getState(){
        return this.state;
      }

      dispatch(action){
         this.state = this.reducer(this.state,action);
      }

}
*/
let intialState = {count : 0, todo : []};

// let store = new Store(reducer, intialState);
 let store = createStore(reducer, intialState); //using Redux library

// console.log(store.getState());

let action = {type : "INC_COUNT", payload : 2}
store.dispatch(action);
let action2 = {type : "DEC_COUNT", payload : 1}
store.dispatch(action2);
let action3 = {type : "ADD_TODO", payload : ["Eat","Code"]}
 let action4 = {type : "ADD_TODO", payload : ["Code again"]}
store.dispatch(action3);
store.dispatch(action4);

console.log(store.getState());