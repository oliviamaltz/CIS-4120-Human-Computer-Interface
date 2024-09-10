import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Text} from '@chakra-ui/react'

import {Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'

function App() {

  // routes

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
