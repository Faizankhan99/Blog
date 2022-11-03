import { Auth_failed,Auth_loading, Auth_logout, Auth_Succes} from "./Auth.type";

const initialState = {
    loading: false,
    error: false,
    token:localStorage.getItem("token")||""
}

export const AuthReducer = (state = initialState, { type, payload }) => {
    
    switch (type){
 
        case Auth_loading:{
            return {
                ...state,
                loading: true
            }
        }

        case Auth_Succes: {
            localStorage.setItem("token",JSON.stringify(payload))
            return {
                ...state,
                loading: false,
                error: false,
                token: payload
            }
 
        }
        case Auth_failed: {
            return {
                ...state,
                loading: false,
                error: true,
            }
     }
        case Auth_logout: {
            localStorage.removeItem("token")
            return {
                ...state,
                loading: false,
                error: false,
                token: ""
            }
        }    
            
        default:{
            return state;
        }
    }
    
}