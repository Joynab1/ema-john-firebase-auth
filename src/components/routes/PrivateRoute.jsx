import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import './PrivateRoute.css'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location= useLocation()
    console.log(location)
    console.log(loading)

    if(loading){
        return <div className='loading'></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
    return (
        <div>

        </div>
    );
};

export default PrivateRoute;