import React, { useEffect, useState } from 'react';
import { get } from '../utilidades/httpClient';
import { PeliculaCard } from './PeliculaCard';
import styles from "./PeliculasGrid.module.css";
import { Loader } from '../componentes/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Vacio } from "./Vacio";

export function PeliculasGrid({busqueda}){
    const [ peliculas, setPeliculas ] = useState([]);
    const [ cargando, setCargando ] = useState(true);
    const [ pagina, setPagina ] = useState(1);
    const [ hayMasPag, setHayMasPag ] = useState(true);

    useEffect(()=>{
        setCargando(true);
        const busquedaUrl = busqueda ? "/search/movie?query=" + busqueda + "&page=" + pagina : "/discover/movie?page=" + pagina;
        get(busquedaUrl)
        .then(datos => {
            setPeliculas(pagAnterior => pagAnterior.concat(datos.results));
            setHayMasPag(datos.page < datos.total_pages);
            setCargando(false);
        });
    }, [busqueda, pagina])

    if(peliculas.length == 0){
        return <Vacio />
    }

    return(
        <InfiniteScroll
            dataLength={peliculas.length}
            hasMore={hayMasPag}
            next={()=> setPagina(pagAnterior => pagAnterior + 1)}
            loader={<Loader />}
        >
            <ul className={styles.peliculasGrid}>
                {peliculas.map(pelicula => 
                    <PeliculaCard key={pelicula.id} pelicula={pelicula} />
                )}
            </ul>
        </InfiniteScroll>
        
    );
}