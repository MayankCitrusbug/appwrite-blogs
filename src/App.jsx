import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import './App.css'
import authService from './appwrite/auth';
import { login, logout } from './features/auth/authSlice';
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        userData ? dispatch(login(userData)) : dispatch(logout());
      })
      .finally(() => setLoading(false))
  })

  if (loading) {
    return (
      <div className='w-full flex items-center justify-center min-h-screen'>
        <h1 className='text-center font-bold text-3xl text-white'>Loading</h1>
      </div>
    )
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
