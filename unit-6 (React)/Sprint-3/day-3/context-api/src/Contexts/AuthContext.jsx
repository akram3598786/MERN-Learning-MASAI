import React from "react";

export const AuthContext = React.createContext();

export function AuthContextProvider({children}){
 const [islogin, Setislogin] = React.useState(false);

 const Loginhandler=()=>{
     Setislogin(islogin ? false : true);
 }

    return(
        <AuthContext.Provider value={{islogin,Loginhandler}}>
            {children}
        </AuthContext.Provider>
    );

}