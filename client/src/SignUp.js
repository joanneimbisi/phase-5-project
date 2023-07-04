import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { signup } from "./components/actions/users";
import "./login.css"

function SignUp() {

    const { user } = useSelector((store) => store.usersReducer);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log('users', user)
    
    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user, navigate])
    
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch(signup(formData))
        console.log(signup)
        
    }

    function handleChange(event){
        setFormData({
            ...formData,[event.target.id]: event.target.value,
        })
    }

    return (
        <>
          <div class='bold-line'></div>
          <div class="container"> 
          <div class='window'>
          <div class='overlay'></div>
           <div class='content'> 
          <h2 class='welcome'> Sign Up</h2>
          <br></br>
          <div class='subtitle'> Create an account!</div>
          <br></br>
          <form action= "#" onSubmit={handleSubmit}>
                <label htmlFor="username">
            <div class="input_fields">
                <br></br>
                </div>
                username:
                <input
                    placeholder="username"
                    class='input-line full-width'
                    type="textarea"
                    id="username"
                    onChange={handleChange}
                    value={formData.username}
                    required
                    
                    />
                <i className="far fa-user"></i>
                </label>
                <br />
            {/* <div className="input_box"> */}
                <label htmlFor="password">
                    password:
                    <input
                    placeholder="password"
                    class='input-line full-width'
                    type="textarea"
                    id="password"
                    onChange={handleChange}
                    value={formData.password}
                    required
                    />
                <i className="far fa-user"></i>
                </label>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button type='submit' class='ghost-round full-width'> Sign Up </button>
            </form>
            </div>

            </div>
            <div>
        </div>
        </div>

            <input type="submit" value="Submit" class='ghost-round full-width'/>

             {/* { errors && (
                 <ul style={{ color: "red" }}>
                 {errors.map((error) => (
                     <li key={error}>{error}</li>
                     ))}
                     </ul>
                    )}  */}
               
            </>

        );
}
export default SignUp;

