import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import Login from './Login';
import NavBar from './NavBar';
import Cart from './Cart'
import SignUp from './SignUp'
import CameraDetail from './CameraDetail';
import MyOrders from './MyOrders'
import { useEffect } from 'react';
import Cameras from "./Cameras"
import { useDispatch, useSelector } from 'react-redux';
import { loadCameras } from './components/actions/cameras';
import { loadBrands } from './components/actions/brands'


import { loadOrders } from './components/actions/orders'
import ThankYou from "./ThankYou";
import { getCurrentUser } from "./components/actions/users";




function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.usersReducer)
  const canProceed = user.loggedIn && !user.loading;

  useEffect(() => {
    dispatch(getCurrentUser())    
  }, [dispatch])
 
  useEffect(() => {
    // runs a piece of code AFTER react renders your component
    dispatch(loadCameras())
    // thunk takes over
  }, [dispatch])

  useEffect(() => {
    dispatch(loadBrands())
  },[dispatch])
  
  useEffect(() => {
    canProceed && dispatch(loadOrders())
  }, [dispatch, canProceed])

  return (
    <BrowserRouter>
        <div className="App">
                <NavBar />
                                <Routes>
                  <Route path='/' exact element={<Home/>} />
                  <Route path='/orders' element={<MyOrders/>}/>
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/signup' element={<SignUp />} />                  
                  <Route path='/cameras' element={<Cameras />} />
                  <Route path='/cameras/:id' element={<CameraDetail />} />
                  <Route path='/thankyou' element={<ThankYou />}/>
                </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;


// ReadME
// Form submission (error handling and formatting)
// LogOut (refresh)
