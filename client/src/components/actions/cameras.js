export const loadCameras = (user) => {
    // thunk middleware uses these actions to make async calls
    // it expects a function to be returned 
    //  the function itself takes in a parameter called dispatch
    
    // dispatch action -> update reducers state -> useSelector -> access reducers state
    return dispatch => {
        // async calls 
        fetch('/cameras')
        .then(resp => resp.json())
        .then(data => {
            const action = { type: "LOAD_CAMERAS", payload: data, user}
            // Type is the value describing the state change that we want to see (mandatory)
            // Payload: any data needed to complete the state change (optional)
            dispatch( action)
            // we dispatch the action to the reducer
        })
    }
}

