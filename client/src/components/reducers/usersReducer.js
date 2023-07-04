 const initialState = {
    user: null,
    loading: false,
    loggedIn: false,
    loginError: null
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return { ...state, loading: true }
        case "LOGIN":
            return {
                ...state,
                loading: false,
                user: action.payload,
                loggedIn: true,
                loginError: false
            }
        case "time":
            return { loading: false }
        case "LOGIN_ERROR":
            return {
                ...state,
                loading: false,
                loginError: action.payload,
                loggedIn: false,
            }
            case "LOG_OUT":
                return {
                    ...state,
                    loggedIn: false,
                    user: action.payload
                }
                
            case "SIGN_UP":
                return {
                    ...state,
                    user: action.payload,
                    loggedIn:true
                }
        default:
            return state;   
    }
}

export default usersReducer;
