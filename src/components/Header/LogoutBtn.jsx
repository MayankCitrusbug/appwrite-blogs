import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import authService from '../../appwrite/auth';
import { logout } from '../../features/auth/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const logoutHandler = useCallback(() => {
        authService.logout()
            .then(() => {
                dispatch(logout());
                navigate('/')
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <button
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}
        >Logout</button>
      )

}

export default LogoutBtn