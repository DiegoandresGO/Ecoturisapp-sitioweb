import React from 'react';
import "./app.css";
import { Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer/footer";
import Home from "./Components/Home/home";
import Main from "./Components/Main/main";
import Navbar from "./Components/Navbar/navbar";



function App()  {

    return ( 
        
    <div>
        <Navbar/>
        <Home/>
        <Main/>
        <Footer/>   
    </div>
    );
}

export default App;