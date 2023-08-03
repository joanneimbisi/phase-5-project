import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const ErrorComponent = ({ name, errors }) => {
    if (!errors || errors.length === 0) return null

    return errors.map(error => {
        return <div>{`${name} ${error}`}</div>
    })
}

const Cart = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    shipping_address: "",
  });

  const [errors, setErrors] = useState({})

  const { user } = useSelector((store) => store.usersReducer);

  useEffect(() => {
    if(!user) {
        navigate("/login")
    }
  }, [user, navigate])

  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cartReducer);

  const handleDelete = (cartId) => { 
    dispatch({ type: "DELETE_ITEM", payload: cartId });
  };

  const handleFirstName = (event) => {
    setValues({ ...values, first_name: event.target.value });
  };

  const handleLastName = (event) => {
    setValues({ ...values, last_name: event.target.value });
  };

  const handleAddress = (event) => {
    setValues({ ...values, shipping_address: event.target.value });
  };
  const subtotal = cart.reduce((acc, c) => acc + c.price, 0);
  const shipping = 4.95;
  const taxes = 3.0;
  const total = subtotal + shipping + taxes;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      first_name: values.first_name,
      last_name: values.last_name,
      shipping_address: values.shipping_address,
      camera_ids: cart.map((item) => item.id),
    };
    console.log("data", data);

    fetch("/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then(() => {
          dispatch({ type: "ORDER_PLACED", payload: [] });
          if (user) {
            navigate("/thankyou");
          } else {
            navigate("/login");
          }
        });
      } else {
        resp.json().then((res) => {
          setErrors(res.errors)
        });
      }
    });
  };

  console.log('errors', errors)


  return (
    <>
    <table> 
        <tbody>
         <tr>
            <th className="prod">Product</th>
            <th className="subs">Subtotal</th>
        </tr>

        {cart.map((camera) => {
            return (
                <tr key={camera.cartId} className="cart-info">
             <td>
                {" "}
                <img
                width="50px"
                height="50px"    
                src={camera.image_url}
                alt="camera"
                />{" "}
             </td>
         <td>{camera.camera_name}</td>
         <td>
            <button
                type="button"
                onClick={() => handleDelete(camera.cartId)}
                >
                {" "}
                Remove Iter{" "}
                 </button>
                </td>
              </tr>
             );
           })}
          </tbody>
        </table>
        <div className="total-price">
          <table>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>${subtotal}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>{shipping}</td>
              </tr>
              <tr>
                <td>Taxes</td>
                <td>{taxes}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{total}</td>
              </tr>
            </tbody>
           </table>
          </div> 

 
      <h2 className="all "> Your Info</h2>

      <div className="all">
      <form onSubmit={handleSubmit} className="form">
        <label className="field">
        <span className="label-text"> First Name</span>
        <input
          type="text"
          value={values.first_name}
        //   required
          onChange={handleFirstName}
          placeholder="Full Name"
          name="first_name"
        />
        <ErrorComponent name='First name' errors={errors.first_name} />
        </label>
        <label className="field">
        <span className="label-text"> Last Name </span>
        <input
        type="text"
          value={values.last_name}
        //   required
          onChange={handleLastName}
          placeholder="Full Name"
          name="last_name"
        />
        <ErrorComponent name='Last name' errors={errors.last_name} />
        </label>
        <label className="field">
        <span className="label-text"> Address </span>
        <input
        type="text"
          value={values.shipping_address}
        //   required
          onChange={handleAddress}
          placeholder="Full Name"
          name="shipping_address"
        />
        <ErrorComponent name='Shipping Address' errors={errors.shipping_address} />
        <br></br>
        <button className="sub-button" type="submit">
          {" "}
          Submit
         </button>
        </label>
      </form>
      
  </div>
    </>
  );
};
export default Cart;
