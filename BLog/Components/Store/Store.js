import { legacy_createStore,combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { AuthReducer } from "./Auth/Auth.reducer"

const rootReducer = combineReducers({
    auth:AuthReducer
})



export const store =legacy_createStore(rootReducer,applyMiddleware(thunk)) 
