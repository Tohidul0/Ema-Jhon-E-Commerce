import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Shop from './Component/Shop/Shop'
import { Route, Routes } from 'react-router-dom'
import CartDetails from './Component/CartDetails/CartDetails'

function App() {
  

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/Home" element={<Shop></Shop>}></Route>
        <Route path="/Details" element={<CartDetails></CartDetails>}></Route>
      </Routes>
      
    </>
  )
}

export default App
