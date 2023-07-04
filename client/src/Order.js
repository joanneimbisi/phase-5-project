import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteOrder, editOrder } from './components/actions/orders';

export default function Order({ order }) {
    const [showEdit, setShowEdit] = useState(false)
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        shipping_address: ""
    })
    
    const dispatch = useDispatch();

    const removeOrder = () =>{
        dispatch(deleteOrder(order.id));
    }

    const onEditOrder = (e) => {
        e.preventDefault();
        dispatch(editOrder(order.id, formData));
        setShowEdit(!showEdit)
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
    // partially controlled inputs - supplied one of onChange or value


  return (
    <>
                <div>{order.id}{order.first_name} {order.last_name}{order.shipping_address} 
                <button type="button" onClick={onShowEdit}>EDIT</button>
                <img width='50px' height="50px" src={order.camera.image_url} alt="logo"/><button onClick={removeOrder}> CANCEL</button></div>
                {showEdit &&
                    <form onSubmit={onEditOrder}>
                        <label className="id">
                        first_name:
                        <input type="text" name="first_name" onChange={handleChange} value={formData.first_name || ''}/> 
                        <i className="far fa-user"></i>
                        </label>
                        <br />
                        <label className="id">
                        last_name:
                        <input type="text" name="last_name" onChange={handleChange} value={formData.last_name || ''} />
                        <i className="far fa-user"></i>
                        </label>
                        <label className="id">
                        shipping_address:
                        <input type="text" name="shipping_address" onChange={handleChange} value={formData.shipping_address || ''} />
                        <i className="far fa-user"></i>
                        </label>
                        <button type='submit'>Update order</button>
                    </form>
                }                        
            </>
  )
}
