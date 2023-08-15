import React from "react";
import { NavLink} from "react-router-dom";
import "./navbar.css";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./components/actions/users";


function NavBar() {
  
  const [active, setActive] = useState("nav_menu");
  const [icon, setIcon] = useState("nav_toggler");
  const cart = useSelector((store) => store.cartReducer);
  const { user } = useSelector((store)=> store.usersReducer)
  const dispatch = useDispatch()
  const navToggle = () => {
    if (active === "nav_menu") {
      setActive("nav_menu nav_active");
    } else setActive("nav_menu");

    // Icon Toggler
    if (icon === "nav_toggler") {
      setIcon("nav_toggler toggle");
    } else setIcon("nav_toggler");
  };

  const handleLogOut = () =>{
    dispatch(logout(user))
  } 

  console.log('user', user)

  return (
    <nav className="nav">
 
   <a href="/" className="nav_brand"> CAMERA SHOP </a>
    
      <div className="nav-items">
        <ul className={active}>
          <li>
            <NavLink to="/" className="nav_link"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/cameras" className="nav_link">Shop</NavLink>
          </li>
          <li>
            {user?.id ? <NavLink className="nav_link" onClick={handleLogOut}>LogOut</NavLink> :
            <NavLink to="/login" className="nav_link" >Login</NavLink> }
          </li>
          <li>
            <NavLink to="/cart" className="nav_link" >Cart {cart.length}</NavLink>
          </li>
        </ul>
      </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default NavBar;
