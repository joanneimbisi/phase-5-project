import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Signup';
import Home from './Home';
import Login from './Login';
import NavBar from './NavBar'
import { Provider } from 'react-redux';
import { useEffect, useState } from 'react';
import MyOrders from "./MyOrders"
import Cameras from "./Cameras"
import CameraDetail from "./CameraDetail"



function App() {
  const [cameras, setCameras] = useState([])


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
   
  return (
    <BrowserRouter>
      <Provider>
        <div className="App">
                <NavBar />
                <Routes>
                  <Route path='/' exact element={<Home/>} />
                  <Route path='/myOrders' element={<MyOrders/>}/>
                  <Route path='/signup' element={<Signup />} />
                  <Route path='/login' element={<Login/>} />
                  <Route path='/cameras' element={<Cameras cameras={cameras} />} />
                  <Route path='/cameras/:id' element={<CameraDetail cameras={cameras} setCameras={setCameras} />} />
                </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

