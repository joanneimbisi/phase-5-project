const initialState = []

const ordersReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOAD_ORDERS": 
            return action.payload
        case "DELETE_ORDER":
            return state.filter(order => order.id !== action.payload);
            // payload is the id of the item we want to delete
        case "EDIT_ORDER":
            return state.map(co => {
                    return action.payload.id === co.id ? action.payload : co
                 })
        default:
          return state;
    }
}


export default ordersReducer;

