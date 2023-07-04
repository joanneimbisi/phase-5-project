import { useSelector } from "react-redux";
import Order from "./Order";



const MyOrders = () => {
    
    const orders = useSelector((store) => store.ordersReducer);
 
    

    const data = orders.map((order) => { 
        return <Order key={order.id} order={order} />
    });

    console.log('data', data) // [<Order key='1' />, <Order key='3' />, <Order />]
    
    console.log(orders)
    return(
        <>
        <h2> Order History</h2>
        {data}
      </>
    );
};

export default MyOrders;