import React, {useContext} from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

 export const LoginScreen = ({history}) => {
    
    const {dispatch}  = useContext(AuthContext)

    const handleLogin = () => {
        // console.log("click")
        const lastPath = localStorage.getItem('lastPath') || '/'
        
        dispatch({
            type:types.login,
            payload:{
                name:'Glenda'
            }
        });
        history.replace(lastPath)
        
    }
    
    return (
        <div className="container mt-5">
            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >Login</button>
        </div>
    )
}


