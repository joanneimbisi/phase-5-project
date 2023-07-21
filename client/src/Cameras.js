import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import "./Card.css";
// import { uuid } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

 
const Cameras = () => {
  const cameras = useSelector((store) => store.camerasReducer);
  const currentUser = useSelector((store) => store.usersReducer);
 console.log(currentUser)
  console.log(cameras)
  
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const brands = useSelector((store) => store.brands)
  console.log(brands)


  console.log("cameras", cameras);
  const [selectedBrand, setSelectedBrand] = useState();
  const [filteredCameras, setFilteredCameras] = useState([]);

  useEffect(() => {
    setFilteredCameras(cameras)
  }, [cameras])
  
  const handleChange = (event) => {
    const value = event.target.value;
    const filteredCamerasList = cameras.filter(camera => camera.brand_id === parseInt(value));
    setFilteredCameras(filteredCamerasList)
    setSelectedBrand(value);
  };
 
  const addToCart = (camera) =>{
    dispatch({ type: 'ADD_TO_CART', payload: { ...camera, cartId: uuidv4() } });
  }

  const handleProduct = (id) => {
   navigate(`/cameras/${id}`) 
  }
  
  return (
    <>
      <title>Cameras</title>
      <div>
        <br></br>
        <label>       
          Brand
          <select value={selectedBrand} onChange={handleChange}>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>{brand.brand_name}</option>
            ))}
          </select>
        </label>
      </div>

      <main className="container">
      <main className="grid">
        {filteredCameras.map((camera) => (
          <div key={camera.id} className="row">
            <div className="card">
              <div className="product-image" >
                <img src={camera.image_url} alt="cameraimage" onClick={() => handleProduct(camera.id)}/>
              </div>
              <div className="product-info">
                <div className="product-text">
                  <h2>{camera.camera_name}</h2>
                </div>
                <div className="card-body">
                  <p>{camera.brand}</p>
                </div>
              </div>
              <div className="product-price-btn">
                <div className="btn">
                  <p>
                    <span>$</span>
                    {camera.price}
                  </p>
                  <h5 className="buy-btn" onClick={() => addToCart(camera)}>Add to Cart</h5>
               
                </div>
              </div>
            </div>
          </div>
        ))}
        </main>
      </main>
    </>
  );
};
export default Cameras;
