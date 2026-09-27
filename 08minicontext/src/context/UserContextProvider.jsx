 import React, { useState } from "react";
 import UserContext
  from "./UserContext";//2

  const  UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null);//for data
return(
    <UserContext.Provider value={{user,setUser}}>
    {children};
    </UserContext.Provider>
)
  }

  export default UserContextProvider;