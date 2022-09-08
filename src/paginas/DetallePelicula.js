import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from "./DetallePelicula.module.css";
import { get } from '../utilidades/httpClient';
import { Loader } from '../componentes/Loader';

export function DetallePelicula() {
    const { idPelicula } = useParams();
    const [ cargando, setCargando ] = useState(true);
    const [ pelicula, setPelicula ] = useState(null);

    useEffect(()=>{
        setCargando(true);
        get("/movie/" + idPelicula).then(datos => {
            setPelicula(datos);
            setCargando(false);
        })
    }, [idPelicula]);
    
    if(cargando){
        return <Loader />
    }

    if(!pelicula){
        return null;
    }

    
    const imgUrl = "https://image.tmdb.org/t/p/w500" + pelicula.poster_path;
    return(
        <div className={styles.contenedor}>
            <img 
            src={imgUrl} 
            alt="Imagen de la pelicula"
            className={`${styles.columna} ${styles.img}`}
            />
            <div className={`${styles.columna} ${styles.descripcion}`}>
                <p><strong>Titulo: </strong>{pelicula.title}</p>
                <p><strong>Género: </strong>{pelicula.genres.map(genero => genero.name).join(", ")}</p>
                <p><strong>Descripción: </strong>{pelicula.overview}</p>
            </div>
        </div>
    );
}