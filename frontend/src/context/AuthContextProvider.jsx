import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider(props) {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
      );
    
      const login = async (userData) => {
        const res = await axios.post("/auth/login", userData);
        setCurrentUser(res.data);
      };
    
      const logout = async () => {
        await axios.post("/auth/logout");
        setCurrentUser(null);
      };
    
      useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
      }, [currentUser]);
    
      return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
          {props.children}
        </AuthContext.Provider>
      );
}

export default AuthContextProvider;