import React from "react";
import styled from "@emotion/styled";
import { AuthContext } from "../Contexts/AuthContext";
import { LoginDataContext } from "../Contexts/LoginDataContext";
import LoginUserPop from "./LoginUser";
import UserProfile from "./Profile";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'


let NavWrapper = styled.div`
display : flex;
justify-content : space-around;
align-items : center;
background : black;
color : white;
padding : 10px 0px
`;
let Navheading = styled.h1`

`;
let Button = styled.button`
background : brown;
width : 200px;
height : 40px;
border-radius : 7px;
color : white;
font-weight : bold;
font-size : 22px;
cursor : pointer;
margin-left : 20px;

&: hover{
    background : yellow;
    color : black;
}
`;
export default function Navbar() {
    let {Logindata, loginDatahandler} = React.useContext(LoginDataContext);
    let { islogin, Loginhandler } = React.useContext(AuthContext);
    return (
        <div>
            <NavWrapper>
                <Navheading> Navbar </Navheading>
                {islogin ?
                    <div style={{"display": "flex"}}>
                        <Avatar style={{"margin-right": "20px", "height" : "40px", "width" : "40px"}}>
                            <AvatarBadge boxSize='1.25em' bg='green.500' />  
                        </Avatar>
                        <h2>{Logindata.first_name +" "+ Logindata.last_name}</h2>
                        <Button onClick={() => {
                            Loginhandler(false);
                        }}>Logout</Button>
                    </div>
                    : <LoginUserPop />}
            </NavWrapper>
            <div>
                {/* {Logindata ? <h2>({Logindata.first_name +" "+ Logindata.last_name})</h2> : ""} */}
                {islogin ? <UserProfile /> : ""}
            </div>
        </div>
    );
}