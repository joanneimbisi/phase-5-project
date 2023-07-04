import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import "./Card.css";
import { uuid } from 'uuidv4';
import { useNavigate } from "react-router-dom";



// eslint, prettier (airbnb)

const Cameras = () => {
  const cameras = useSelector((store) => store.camerasReducer);
  // const cartItemAmount = 
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
    dispatch({ type: 'ADD_TO_CART', payload: { ...camera, cartId: uuid() } });
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
              <option value={brand.id}>{brand.brand_name}</option>
            ))}
          </select>
        </label>
      </div>

      <main class="container">
        {filteredCameras.map((camera) => (
          <div class="row">
            <div class="card">
              <div class="product-image">
                <img src={camera.image_url} alt="cameraimage" onClick={() => handleProduct(camera.id)}/>
              </div>
              <div class="product-info">
                <div class="product-text">
                  <h2>{camera.camera_name}</h2>
                </div>
                <div className="card-body">
                  <p>{camera.brand}</p>
                </div>
              </div>
              <div class="product-price-btn">
                <div class="btn">
                  <p>
                    <span>$</span>
                    {camera.price}
                  </p>
                  <h5 class="buy-btn" onClick={() => addToCart(camera)}>Add to Cart</h5>
                  <button class="fav">
                    <svg
                      class="svg"
                      id="i-star"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};
export default Cameras;
// onClick of add to cart, add items to their cart
// 