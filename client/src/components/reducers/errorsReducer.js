const initialState = [] 

const errorsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "SET_ERRORS":
        return action.payload 
        
        default:
        return state

    }
}

export default errorsReducer;