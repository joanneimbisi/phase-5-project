import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import Login from './Login';
import NavBar from './NavBar';
import Cart from './Cart'
import SignUp from './SignUp'
import CameraDetail from './CameraDetail';
import { useEffect, useState } from 'react';
// import MyOrders from "./MyOrders"
import Cameras from "./Cameras"
import { useSelector, useDispatch } from 'react-redux';
import { loadCameras } from './components/actions/cameras';
import { loadBrands } from './components/actions/brands'

import MyOrders from './MyOrders'

import { loadOrders } from './components/actions/orders'




function App() {
  const [cameras, setCameras] = useState([])
  const reduxState = useSelector((store) => store.camerasReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // runs a piece of code AFTER react renders your component
    dispatch(loadCameras())
    // thunk takes over
  }, [dispatch])

  useEffect(() => {
    dispatch(loadBrands())

  },[dispatch])
  
  useEffect(() => {
    dispatch(loadOrders())
  }, [dispatch])


    
   
   

  useEffect(() => {
    fetch('/cameras', { 
        method: "GET", 
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(resp => resp.json())
    .then(data => {
        setCameras(data)
    })       
  }, [])
  //  const [cart, setCart] = useState({})
  return (
    <BrowserRouter>
        <div className="App">
                <NavBar />
                                <Routes>
                  <Route path='/' exact element={<Home/>} />
                  <Route path='/myorders' element={<MyOrders/>}/>
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/login' element={<Login/>} />
                  <Route path='/signup' element={<SignUp/>} />                  
                  <Route path='/cameras' element={<Cameras cameras={cameras} />} />
                  <Route path='/cameras/:id' element={<CameraDetail cameras={cameras} setCameras={setCameras} />} />
                </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;

