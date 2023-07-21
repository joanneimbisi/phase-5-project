// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './thankyou.css'

const ThankYou = () => {
    
    
    const navigate = useNavigate()
    
    const handleHome = () =>{
    navigate('/')
    }


return (
    <>
    <div className="content">
  <div className="wrapper-1">
    <div className="wrapper-2">
      <h1>Thank you !</h1>
      <p>We are working on your order  </p>
      <p>you should receive a confirmation email soon  </p>
      <button className="go-home" onClick={handleHome}>
      go home
      </button>
    </div>
    <div className="footer-like">
      <p>Email not received?
       <a href="/">Click here to send again</a>
      </p>
    </div>
</div>
</div>



<link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro" rel="stylesheet"></link>
</>
)
}
export default ThankYou