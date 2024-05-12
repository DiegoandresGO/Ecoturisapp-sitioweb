import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import "./app.css";
import { BrowserRouter } from 'react-router-dom';
export * from "./Components/Pages/Contacto"
export * from "./Components/Pages/Destinos"
export * from "./Components/Pages/Alojamientos"
export * from "./Components/Pages/Actividades"
export * from "./Components/Pages/Inicio"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </React.StrictMode>
);