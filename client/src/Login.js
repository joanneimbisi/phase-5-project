import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "./login.css"
import { useDispatch, useSelector } from 'react-redux'
import { login } from "./components/actions/users";

function Login(){
  
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, loginError, loading } = useSelector(store => store.usersReducer);
    console.log('inside of the login component', user)

    useEffect(() => {
      if (user) {
        navigate('/')
      }
    }, [user, navigate])

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    function handleSubmit(event) {
      event.preventDefault();
      dispatch(login(formData));        
    }

    function handleChange(event){
            setFormData({
                ...formData,[event.target.name]: event.target.value,
            })
        }
      
    function handleSignUp(){
      navigate("/signup")
    }

        return (
          <>
          <div class='bold-line'></div>
          <div class="container"> 
          <div class='window'>
          <div class='overlay'></div>
           <div class='content'>
            <h2 class='welcome'> Login </h2>
            <div style={{color:"red"}}>
                 {loginError?.errors}
                 </div>
            <br></br>
            <div class='subtitle'> Hello There!</div>
            <br></br>
               <form onSubmit={handleSubmit}>
            <label className="id">
                <div class='input-fields'>
              username:
             <input type="text" name="username" class='input-line full-width' onChange={handleChange} value={formData.username}/> 
              <i className="far fa-user"></i>
            </div>
            </label>
            <br />
            <label className="id">
              password:
              <input type="text" name="password" class='input-line full-width' onChange={handleChange} value={formData.password}/>
              <i className="far fa-user"></i>
            </label>
            <div class='spacing'>or <span class='highlight'  onClick={handleSignUp}>Sign Up</span></div>
            <button type='submit' disabled={loading} class='ghost-round full-width'>{loading ? 'Loading...' : 'Login'} </button>
          </form>
          </div>
          </div>
          </div>

          </>

       
        );
}

export default Login
    
