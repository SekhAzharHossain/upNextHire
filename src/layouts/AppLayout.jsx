import React from 'react'
import '../App.css'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
const AppLayout = () => {
  return (
    <div>
        <div className='grid-background'></div>
        <main className=' min-h-screen container'>
            <Header/>
            <Outlet/>
        </main> 
    </div>
  )
}

export default AppLayout