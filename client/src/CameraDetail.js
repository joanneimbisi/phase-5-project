import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CameraDetail = () =>{
    const { id } = useParams();

    const cameras = useSelector((store) => store.camerasReducer);
    const camera = cameras.find((camera) => {
        console.log('camera.di', camera.id, id)
        return camera.id === parseInt(id)
    })

        
         return (
          <>
            <div className="col-md-6">
              <img src={camera.image_url} alt={camera.camera_name}
              height="400px" width="400px"/>
            </div>
            <div className="col-md-6">
              <h1 className="display-5">{camera.camera_name}</h1>
              <p className="lead">
                 Description {camera.description}
              </p>
              <p className></p>
            </div>
          
          </>
         
         )

}
export default CameraDetail