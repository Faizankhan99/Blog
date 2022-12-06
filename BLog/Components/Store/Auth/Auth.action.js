
import axios from "axios";
import { Auth_failed, Auth_loading, Auth_logout, Auth_Succes } from "./Auth.type";


export const Logindata = (cred) => async (dispatch) => {
    dispatch({ type: Auth_loading })
    try {
        let res = await axios.post("http://localhost:8080/user/login", cred)
        // console.log(res.data)
        dispatch({ type: Auth_Succes,payload:res.data}) 
    } catch (err) {
        dispatch({ type: Auth_failed})   
    }
}
export const Logout = () =>({type:Auth_logout})
