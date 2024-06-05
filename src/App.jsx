//import React from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './footer.jsx'
import About from './About.jsx'
import Home from './Home.jsx'
import Flower from './Flower.jsx'
import SignIn from './SignIn.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/flowers" element={<Flower/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
