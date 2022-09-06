import React, { useEffect, useState } from 'react';
import { get } from '../utilidades/httpClient';
import { PeliculaCard } from './PeliculaCard';
import styles from "./PeliculasGrid.module.css";

export function PeliculasGrid(){
    const [peliculas, setPeliculas] = useState([]);

    useEffect(()=>{
        get("/discover/movie")
        .then(datos => {
            setPeliculas(datos.results);
            console.log(datos.results)
        });
    }, [])
    return(
        <ul className={styles.peliculasGrid}>
            {peliculas.map(pelicula => 
                <PeliculaCard key={pelicula.id} pelicula={pelicula} />
            )}
        </ul>
    );
}