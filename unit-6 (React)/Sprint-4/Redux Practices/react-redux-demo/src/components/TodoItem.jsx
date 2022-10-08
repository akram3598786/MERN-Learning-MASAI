import styled from "@emotion/styled";
import "./Todo-module.css";

const Wrapper = styled.div`
  display : flex;
  gap : 30px;
`;

export const TodoItem=({title,sts,id})=>{
    return(
       <div className="todo">
        <p>{title}</p>
        {sts ? <p>Completed</p> : <p>Pending</p>}
       </div>
    ); 
}