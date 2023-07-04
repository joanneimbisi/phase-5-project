const brandsReducer = (state=[], action) => {
    switch(action.type) {
        case "LOAD_BRANDS":
            return action.payload
            default:
                return state;
    }
}

export default brandsReducer