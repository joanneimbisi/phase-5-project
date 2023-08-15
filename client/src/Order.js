import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteOrder, editOrder } from './components/actions/orders';
import './order.css'


export default function Order({ order }) {
    const [showEdit, setShowEdit] = useState(false)
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        shipping_address: ""
    })
    // const cameras = useSelector((store) => store.camerasReducer);
    
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    const removeOrder = () =>{
        dispatch(deleteOrder(order.id));
    }

    const onEditOrder = (e) => {
        e.preventDefault();
        dispatch(editOrder(order.id, formData));
        setShowEdit(!showEdit)
        console.log(errors)
        setErrors(errors)
    }

    const handleChange =(event) =>{
        setFormData({
            ...formData, [event.target.name]: event.target.value
        })
       
        console.log('event', event.target.name, event.target.value)
    }
    const onShowEdit = () => {
        setShowEdit(!showEdit);
        setFormData({
            first_name: order.first_name || '',
            last_name: order.last_name || '',
            shipping_address: order.shipping_address || ''
        })
    }  

        // controlled inputs - onChange, value
    // uncontrolled inputs - don't suply onChange, value


    return <>

    <div className='order'> <img width='50px' height="50px" src={order.camera.image_url} alt="logo"/>
    <pre> Order Number: {order.id}</pre>
    First Name: {order.first_name}
    Last Name: {order.last_name}
    Address: {order.shipping_address} 
                <br>
                </br>
                <button type="button" onClick={onShowEdit}>EDIT</button>
                <button onClick={removeOrder}> CANCEL</button>
                {showEdit &&
                    <form onSubmit={onEditOrder}>
                        <label className="id">
                        First Name:
                        <input type="text" name="first_name" onChange={handleChange} value={formData.first_name || ''}/> 
                        <i className="far fa-user"></i>
                        </label>
                        <br />
                        <label className="id">
                        Last Name:
                        <input type="text" name="last_name" onChange={handleChange} value={formData.last_name || ''} />
                        <i className="far fa-user"></i>
                        </label>
                        <label className="id">
                        Shipping Address:
                        <input type="text" name="shipping_address" onChange={handleChange} value={formData.shipping_address } />
                        <i className="far fa-user"></i>
                        </label>
                        <button type='submit'>Update order</button>
                    </form>
                }    

                { errors && (
                 <ul style={{ color: "red" }}>
                 {errors.map((error) => (
                     <li key={error}>{error}</li>
                 ))}
                 </ul>
                 )}
                </div>                   
    </>
    
                
}       