import React from 'react';
import styles from "./App.module.css";
import { DetallePelicula } from './paginas/DetallePelicula';
import { PaginaDeEntrada } from './paginas/PaginaDeEntrada';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";


export function App(){
    return(
        <Router>
            <header>
                <Link to="/">
                    <h1 className={styles.titulo}>Peliculas</h1>
                </Link>
            </header>
            <main>
                <Routes>
                    <Route exact path="/peliculas/:idPelicula" element={<DetallePelicula />}></Route>
                    <Route path="/" element={<PaginaDeEntrada />}></Route>
                </Routes>
            </main>
        </Router>
    )
}