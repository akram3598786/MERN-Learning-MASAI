import React from "react";
import { LoginDataContext } from "../Contexts/LoginDataContext";
import { AuthContext } from "../Contexts/AuthContext";
import styled from "@emotion/styled";
 
let ProfileSection = styled.div `
    width : 30%;
    margin : auto;
    border : 2px solid brown;
    display : flex;
    flex-direction : column;
    align-items : center;


  `;
 let Profile = styled.img `
   width : 150px;
   hwight : 150px;
   border-radius : 50%;
   align-items : center;
 `;

export default function UserProfile(){
    let {Logindata, loginDatahandler} = React.useContext(LoginDataContext);
    let { islogin, Loginhandler } = React.useContext(AuthContext);

    return (  
        <>
    {islogin ? ( 
        <ProfileSection>
            <h1 style={{"color" : "brown", "fontSize" : "25px"}}>User Details</h1>
            <Profile src={Logindata.avatar} alt="" />
            <p2>ID : {Logindata.id}</p2>
            <h2>{Logindata.first_name +" "+ Logindata.last_name}</h2>
            <p> {Logindata.email}</p>
        </ProfileSection>
        ) : "hurry Up to login !"}
         </>
    );
   
}