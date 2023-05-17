import { useState } from "react";
import { useNavigate } from "react-router-dom"

function Login(){
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();



    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    function handleSubmit(event) {
        event.preventDefault();

        fetch('/login', { 
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((resp) => {
          if (resp.ok){
           resp.json()
          .then(navigate("/coffees"))
          } else {
            resp.json().then((errorData) => {
              console.log(errorData.errors)
              setErrors(errorData.errors)})
          
    }
        })       
    }
    function handleChange(event){
            setFormData({
                ...formData,[event.target.name]: event.target.value,
            })
        }

        return (
          <div className="container"> 
            <h2> Login </h2>
               <form onSubmit={handleSubmit}>
            <label className="id">
              username:
             <input type="text" name="username" onChange={handleChange}/> 
              <i className="far fa-user"></i>
            </label>
            <br />
            <label className="id">
              password:
              <input type="text" name="password" onChange={handleChange}/>
              <i className="far fa-user"></i>
            </label>
            <button type='submit'> Login </button>
          </form>
                 <div style={{color:"red"}}>
                  {errors}
                 </div>
          </div>


       
        );
}

export default Login