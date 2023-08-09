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
        navigate('/cameras')
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
          <div className='bold-line'></div>
          <div className="container"> 
          <div className='window'>
          <div className='overlay'></div>
           <div className='content'>
            <h2 className='welcome'> Login </h2>
            <div style={{color:"red"}}>
                 {loginError?.errors}
                 </div>
            <br></br>
            <div className='subtitle'> Hello There!</div>
            <br></br>
               <form onSubmit={handleSubmit}>
            <label className="id">
                <div className='input-field'>
              username:
             <input type="text" name="username" className='input-line full-width' onChange={handleChange} value={formData.username}/> 
              <i className="far fa-user"></i>
            </div>
            </label>
            <br />
            <label className="id">
              password:
              <input type="text" name="password" className='input-line full-width' onChange={handleChange} value={formData.password}/>
              <i className="far fa-user"></i>
            </label>
            <div className='spacing'>or <span className='highlight'  onClick={handleSignUp}>Sign Up</span></div>
            <button type='submit' disabled={loading} className='ghost-round full-width'>{loading ? 'Loading...' : 'Login'} </button>
          </form>
          </div>
          </div>
          </div>

          </>

       
        );
}

export default Login
    
