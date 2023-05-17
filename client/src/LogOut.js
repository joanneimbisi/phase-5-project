import { useNavigate } from "react-router-dom";

const onLogOut = () => {
    const navigate = useNavigate()


    fetch(`/users/`, { 
        method: "DELETE", 
        headers: {
            "Content-Type": "application/json"
        },          
    })
    .then(resp => resp.json())
    .then(data => { 
        console.log(data)
        setCurrentUser(undefined)
        navigate('/')            
    }) 
}

export default onLogOut