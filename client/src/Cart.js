// import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import './cart.css'

const Cart = () => {
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        address: ""
    })
    const dispatch = useDispatch()
    const cart = useSelector((store) => store.cartReducer);
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
        .then(resp => resp.json())
        .then(() => {
            dispatch({ type: 'ORDER_PLACED', payload: [] })
            setValues({
                first_name: "",
                last_name: "",
                address: ""
            })
        })
    }

    return(
         <>
    
    <h2> Your Info</h2>
        <form onSubmit={handleSubmit}>
        <input
        value={values.first_name}
        onChange={handleFirstName}
        className="field"
        placeholder="Full Name"
        name="first_name"/>
        <input
        value={values.last_name}
        onChange={handleLastName}
        className="field"
        placeholder="Full Name"
        name="last_name"/>
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
            
            <h2> Your Cart</h2>
            {cart.map((camera) => {
                return <div key={camera.cartId}>
                {camera.camera_name} {camera.image}
                <button type="button" onClick={() => handleDelete(camera.cartId)}> Delete </button>
                </div>
            })}
            
            <h3> Cart Summary </h3>
            <h6> Subtotal {subtotal}: </h6>
            <h6> Shipping {shipping}: 4.95 </h6>
            <h6> Taxes {taxes}: 3.00 </h6>
            <h6> Total {total}: </h6>
            </>
            );
        }
        
export default Cart