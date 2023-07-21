import { useSelector } from "react-redux";
import Order from "./Order";
import './order.css'



const MyOrders = () => {
    
    const orders = useSelector((store) => store.ordersReducer);

    

    const data = orders.map((order) => { 
        return <Order key={order.id} order={order} />
    
        
    });

    console.log('data', data) 
    
    console.log(orders)
    return(
        <>
        <b className='order'> Order History</b>
        {data}
        
      </>
    );
};

export default MyOrders;