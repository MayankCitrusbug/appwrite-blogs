import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({ children, authentication = true }) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {

        // if (authStatus === true) {
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }

        // Try to understand logic that explained at below
        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])


    if (loader) {
        return (
            <div className='w-full flex items-center justify-center min-h-screen'>
                <h1 className='text-center font-bold text-3xl text-white'>Loading</h1>
            </div>
        )
    }

    return (
        <>{children}</>
    )
}