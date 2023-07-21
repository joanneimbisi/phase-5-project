import { combineReducers } from "redux"
import errorsReducer from "./errorsReducer"
import usersReducer from "./usersReducer"
import camerasReducer from "./camerasReducer"
import brandsReducer from "./brandsReducer"
import cartReducer from "./cartReducer"
import ordersReducer from "./ordersReducer"

export default combineReducers({
    camerasReducer,
    errorsReducer,
    usersReducer,
    brands: brandsReducer,
    cartReducer,
    ordersReducer
})