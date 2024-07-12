import { useState } from 'react'
import SignUp from './components/sign_up.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home.jsx";
import Login from "./components/login.jsx";
import Buying from "./components/buying.jsx";
import Selling from './components/selling.jsx';
import QnAPage from './components/QnAPage.jsx';



function App() {
  

  return (
    <BrowserRouter>
     
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />      
          <Route path="/buying" element={<Buying/>}/>  
          <Route path="/selling" element={<Selling/>}/>
          <Route path="/QnA" element={<QnAPage/>}/>     
      </Routes>
    </BrowserRouter>
  )
}

export default App
