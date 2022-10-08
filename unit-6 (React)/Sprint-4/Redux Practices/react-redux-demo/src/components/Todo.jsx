import TodoInput from "./Addtodo";
import { TodoItem } from "./TodoItem";
import { useSelector } from "react-redux";

export default function Todo(){

 const todos = useSelector((state)=>state.todos)
//   console.log(todos);
    return (
        <div className="mainDiv">
      <TodoInput/>
      <br />
      <hr />
     {
        todos.map((todo)=>{
          return  <TodoItem key={todo.id} {...todo}/>
        })
     }  
      </div>
    );
}