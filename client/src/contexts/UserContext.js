import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserReducer = createContext()

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
     const [loading, setLoading] = useState(true)

     const navigate = useNavigate()

     useEffect(() => {
       fetch('/auth')
       .then(res => {
         if(res.ok){
           res.json()
           .then(user => {
             user && user.id ? setCurrentUser(user) : navigate('/login');
             setLoading(false);
           })
         } else {
           setLoading(false);
         }
       })
     }, [navigate]);
 
       if (loading) return "Loading...";

       console.log(currentUser,"currentUser")
    // Creates a provider around the children
    // The .Provider is from React is through createContext()
    return <UserReducer.Provider value={{ currentUser, loading, setCurrentUser }}>
        {children}
    </UserReducer.Provider>
};

export default AuthProvider;
