 const initialState = {
    user: null,
    loading: true,
    loggedIn: false,
    
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
            }
        case "CURRENT_USER":
            return {
                 ...state,
                loading: false,
                user: action.payload,
                loggedIn: action.payload ? true : false,
            }
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
                    user: null,
                    loggedIn: false
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
