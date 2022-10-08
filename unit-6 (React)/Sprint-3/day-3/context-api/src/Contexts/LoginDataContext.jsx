import React from "react";
export const LoginDataContext = React.createContext();

export function LoginDataContextProvider({children}){
 const [Logindata, setLoginData] = React.useState({});
  //  console.log("contextdata", Logindata);
    const loginDatahandler=(data)=>{
       setLoginData(data);
    }

    return (
        <LoginDataContext.Provider value={{Logindata,loginDatahandler}}>
            {children}
        </LoginDataContext.Provider>
    );
}