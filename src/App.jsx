import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ScrollToHash from "./Components/ScrollToHash";
import HomePage from './Pages/HomePage'
import Services from './Pages/Services'
import Stylists from './Pages/Stylists'
import Book from './Pages/Book'

function App() {
  return (
    <BrowserRouter>

        <ScrollToHash />
        <Routes>

          <Route path="/" element={<HomePage />}/>
          <Route path="/Services" element={<Services />}/>
          <Route path="/Stylists" element={<Stylists />}/>
          <Route path="/Book" element={<Book />}/>

        </Routes>
    </BrowserRouter>
  )
}

export default App

