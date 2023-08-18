import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteOrder, editOrder } from "./components/actions/orders";
import "./order.css";
import ErrorComponent from "./Error";

export default function Order({ order }) {
  const [showEdit, setShowEdit] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    shipping_address: "",
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const removeOrder = () => {
    dispatch(deleteOrder(order.id));
  };

  const onEditOrder = (e) => {
    e.preventDefault();

    dispatch(editOrder(order.id, formData)).then((r) => {
      if (r.ok) {
        setShowEdit(!showEdit);
      } else if (r.status === 422) {
        r.json().then((data) => {
          setErrors(data.errors);
        });
      }
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    console.log("event", event.target.name, event.target.value);
  };

  const onShowEdit = () => {
    setShowEdit(!showEdit);
    setFormData({
      first_name: order.first_name || "",
      last_name: order.last_name || "",
      shipping_address: order.shipping_address || "",
    });
  };

  // controlled inputs - onChange, value
  // uncontrolled inputs - don't suply onChange, value

  return (
    <div className="order">
        <div>


      {" "}
      <img width="50px" height="50px" src={order.camera.image_url} alt="logo" />
      <div key={order.id}>{order.camera.camera_name}</div>
      <div> Order Number: {order.id}</div>
      <div>First Name: {order.first_name}</div>
      <div>Last Name: {order.last_name}</div>
      <div>Address: {order.shipping_address} </div>
      <button type="button" onClick={onShowEdit}>
        EDIT
      </button>
      <br></br>
      <button onClick={removeOrder}> CANCEL</button>
      {showEdit && (
        <form onSubmit={onEditOrder}>
          <label className="id">
            First Name:
            <input
              type="text"
              name="first_name"
              onChange={handleChange}
              value={formData.first_name || ""}
            />
            <ErrorComponent name="First name" errors={errors.first_name} />
            <i className="far fa-user"></i>
          </label>
          <br />
          <label className="id">
            Last Name:
            <input
              type="text"
              name="last_name"
              onChange={handleChange}
              value={formData.last_name || ""}
            />
            <ErrorComponent name="Last name" errors={errors.last_name} />
            <i className="far fa-user"></i>
          </label>
          <label className="id">
            Shipping Address:
            <input
              type="text"
              name="shipping_address"
              onChange={handleChange}
              value={formData.shipping_address}
            />
            <ErrorComponent
              name="Shipping Addres"
              errors={errors.shipping_address}
            />
            <i className="far fa-user"></i>
          </label>
          <button type="submit">Update order</button>
        </form>
      )}
        </div>
    </div>
  );
}
