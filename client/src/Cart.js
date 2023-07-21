import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './cart.css'

const Cart = () => {
   
    const navigate = useNavigate()
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        address: ""
    })
    const dispatch = useDispatch()
    const cart = useSelector((store) => store.cartReducer);
    const errors = useSelector((store) => store.errorsReducer)
    console.log(cart)

    
    const handleDelete = (cartId) => {
        dispatch({ type: 'DELETE_ITEM', payload: cartId });
    };

    const handleFirstName = (event) =>{
        setValues({...values, first_name: event.target.value})
    }

    const handleLastName = (event) =>{
        setValues({...values, last_name: event.target.value})
    }

    const handleAddress =(event) =>{
        setValues({...values, address: event.target.value})
    }
    const subtotal = cart.reduce((acc, c) => acc + c.price, 0)
    const shipping = 4.95
    const taxes = 3.00
    const total = subtotal + shipping + taxes 

    const handleSubmit =(e) =>{
        e.preventDefault()
        const data = {
            first_name: values.first_name,
            last_name: values.last_name,
            address: values.address,
            camera_ids: cart.map((item) => item.id)
        }
        console.log('data', data)

        fetch('/orders', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data) 
        })
        .then((resp) => {
            if (resp.ok){
             resp.json()
             .then(() => {
                 dispatch({ type: 'ORDER_PLACED', payload: [] })
                 setValues({
                     first_name: "",
                     last_name: "",
                     address: ""
                 })
                })
                
            } else {
              resp.json().then(() => {
                dispatch({ type:'SET_ERRORS', payload: errors})
               
              })
    }})
    navigate('/thankyou')
    }

   



    return(
         <>
    
    <h2 className="form"> Your Info</h2>

    <form onSubmit={handleSubmit} className="form">
        <h5 className="font-weight-bold py-2 border-0"> First Name</h5>
        <input
        value={values.first_name}
        onChange={handleFirstName}
        className="field"
        placeholder="Full Name"
        name="first_name"/>
        <h5 className="font-weight-bold py-2 border-0"> Last Name </h5>
        <input
        value={values.last_name}
        onChange={handleLastName}
        className="field"
        placeholder="Full Name"
        name="last_name"/>
        <h5 className="font-weight-bold py-2 border-0"> Address </h5>
            <input
            value={values.address}
            onChange={handleAddress}
            className="form-field"
            placeholder="Full Name"
            name="shipping_address"/>
            <button 
            className="form-field"
            type="submit"> Submit</button>
            </form>
        
            {cart.map((camera) => {
                console.log(camera)
                return <div key={camera.cartId}>
                {camera.camera_name} {camera.image}
                <button type="button" onClick={() => handleDelete(camera.cartId)}> Delete </button>
                </div>
            })}
            <div className="form1">
            <h3> Cart Summary </h3>
            <h4> Subtotal {subtotal}: </h4>
            <h4> Shipping {shipping}: 4.95 </h4>
            <h4> Tax {taxes}: 3.00 </h4>
            <h4> Total {total}: </h4>
            <div style={{color:"red"}}>
                 {errors}
                 </div>

            </div>
            </>
            );
        }
export default Cart

            