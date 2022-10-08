import "./Style.css";
import React from "react";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";

let Navframe = styled.ul `
  
`;

function Navbar(){

    return (
    //  <Navframe>
         <div className="navLinks_ul">
            <Link to="/">Home</Link>
            <Link to="/Products">Products</Link>
        </div>
    //  </Navframe>
    );
}

export default Navbar;  


