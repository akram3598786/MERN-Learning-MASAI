 import styled from "styled-components";
import {Link} from "react-router-dom";

export const Navbar=()=>{

    let Navbar = styled.div`
      background-color : brown;
      padding : 10px 0px;

      & : link {
        background-color : white;
        margin : 0px 30px;
        width : 200px;
        list-style : none;
        text-decoraion : none ;
        border-radius : 6px;
        padding : 5px;
        color : white;
        transition-delay:  ease-in linear 2s;
      }
      & : hover{
        background-color : brown;
        color : white;
      }

    `;

    return (
      <Navbar>
        <Link to="/">home</Link>
        <Link to="/createtodo">CreateTodo</Link>
      </Navbar>
    );
}