
import React, { useState,useEffect, use } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from "./store/authslice"
import { header } from './components/header'
import footer from './components/header'
import {Outlet} from 'react-router-dom'
import './App.css'

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  const[load,setLoad]=useState(true);
  const dispatch=useDispatch();
      
  useEffect(()=>{
authService.getCurrentUser().then((userData)=>{
  if(userData){
    dispatch(login({userData}))
  }
  else{
    dispatch(logout())
  }
}).finally(()=>setLoadi(false))
  },[])

  return !load?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
<div>
  <header/>
  <main>
    {/* <Outlet/> */} Todo:
  </main>
  <footer/>
</div>

    </div> 
      
  ):null
}

export default App
