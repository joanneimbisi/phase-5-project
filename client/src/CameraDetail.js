import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import "./cameraDetail.css"
// import { v4 as uuidv4 } from 'uuid'


const CameraDetail = () =>{
    const { id } = useParams();
  
    const cameras = useSelector((store) => store.camerasReducer);
    const camera = cameras.find((camera) => {
      return camera.id === parseInt(id)
    })
    const dispatch = useDispatch()
    console.log(cameras)

    const addToCart = (camera) =>{
      dispatch({ type: 'ADD_TO_CART', payload: { ...camera, cartId: uuidv4() } });
    }

    if (!camera) return 'Loading...'

        
         return (
          <>
            <div className="col-md-6">
              <img className="pic" src={camera.image_url} alt={camera.camera_name}
              height="400px" width="400px"/>
            </div>
            <div className="col-md-6">
              <h1 className="display-5">{camera.camera_name}</h1>
                 <h5 className="description"> Description:</h5>
                 <br></br>
              <div className="lead">
                {camera.description}
              </div>
              <button className="add-to-cart" onClick={() => addToCart(camera)}>Add to Cart</button>
            </div>
          
          </>
         
         )

}
export default CameraDetail