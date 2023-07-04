const cartReducer = (state = [], action) => {
    const item = action.payload;

    switch(action.type) {
        case "ADD_TO_CART":
            return [...state, item]
        case "DELETE_ITEM":
            return state.filter((camera) => camera.cartId !== item);      
        case "ORDER_PLACED":
            return item   
        default:
            return state;
    }
}

export default cartReducer;