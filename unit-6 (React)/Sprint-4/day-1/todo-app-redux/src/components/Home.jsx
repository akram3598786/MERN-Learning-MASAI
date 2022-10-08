import { Link } from "react-router-dom";
import { TodoItem } from "./TodoItem";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch,shallowEqual} from "react-redux";
import { getTodo_Done, getTodo_Fail, getTodo_Req } from "../Redux/action";


export const TodoList = () => {
 
    
    const dispatch = useDispatch();

    /*

    const {isLoading , todos, isError} = useSelector((state) => {
        return {
            isLoading  : state.isLoading,
           // todos : state.todos,
            isError : state.isError,
        }
    });
    */
   const Todos = useSelector((state)=>{ return state.todos });

  const getTodos=()=>{
      dispatch(getTodo_Req());
       axios
        .get("http://localhost:8080/Todos")
        .then((res)=>{
            dispatch(getTodo_Done(res.data));
        })
      .catch((err)=>{
        // Error handling
        console.log(err);
        dispatch(getTodo_Fail());
      });
    };

    useEffect(() => {
        getTodos();
    }, []);


    return (
        <div>
            <h1>Todo List</h1>
            <br />
            <hr />
            { Todos.length > 0 &&
                Todos.map((todo) => {
                   // <td style={{"color":"blueviolet"}}><Link to={`${prod.id}`}>See Details..</Link></td>
                    //  return <Link to="/"><TodoItem/></Link>
                    return <Link to={`/Todos/${todo.id}`}><div key={todo.id}>{todo.title}</div></Link>
                })
            }
        </div>
    );
}