import { createContext, useContext } from "react";
const UserContext = createContext({ user:{
     
        name: "mayank",
        email : "mayank@mayank.co",
    
}});

export default UserContext;