
const camerasReducer = (state=[], action) => {
    // the action is an object that has these key vlaues applied:
    //  action.type, action.payload
    switch(action.type) {
        case "LOAD_CAMERAS": 
            //return new nondestructive state
            return action.payload
        default:
          return state;
    }

}


export default camerasReducer; 