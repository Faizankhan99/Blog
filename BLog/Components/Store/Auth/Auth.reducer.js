import { Auth_failed,Auth_loading, Auth_logout, Auth_Succes} from "./Auth.type";

const initialState = {
    loading: false,
    error: false,
    role:localStorage.getItem("role")||"",
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
            localStorage.setItem("role", JSON.stringify(payload.role))
            localStorage.setItem("token", JSON.stringify(payload.token))
            console.log(payload.role)
            return {
                ...state,
                loading: false,
                error: false,
                role:payload.role,
                token: payload.token
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
            localStorage.removeItem("role")
            localStorage.removeItem("token")
            return {
                ...state,
                loading: false,
                error: false,
                role:"",
                token: ""
            }
        }    
            
        default:{
            return state;
        }
    }
    
}