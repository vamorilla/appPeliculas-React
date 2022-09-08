import React, { useEffect, useState } from 'react';
import { useQuery } from '../hooks/useQuery';
import { get } from '../utilidades/httpClient';
import { PeliculaCard } from './PeliculaCard';
import styles from "./PeliculasGrid.module.css";
import { Loader } from '../componentes/Loader';

export function PeliculasGrid(){
    const [ peliculas, setPeliculas ] = useState([]);
    const [ cargando, setCargando ] = useState(true);
    const query = useQuery();
    const busqueda = query.get("buscar");

    useEffect(()=>{
        setCargando(true);
        const busquedaUrl = busqueda ? "/search/movie?query=" + busqueda : "/discover/movie";
        get(busquedaUrl)
        .then(datos => {
            setPeliculas(datos.results);
            setCargando(false);
        });
    }, [busqueda])

    if(cargando){
        return <Loader />
    }

    return(
        <ul className={styles.peliculasGrid}>
            {peliculas.map(pelicula => 
                <PeliculaCard key={pelicula.id} pelicula={pelicula} />
            )}
        </ul>
    );
}