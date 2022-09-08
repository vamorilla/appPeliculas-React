import React from 'react';
import { PeliculasGrid } from "../componentes/PeliculasGrid";
import { Buscador } from '../componentes/Buscador';
import { useQuery } from '../hooks/useQuery';
import { useDebounce } from '../hooks/useDebounce';

export function PaginaDeEntrada() {
    const query = useQuery();
    const busqueda = query.get("buscar");
    const debounceBusqueda = useDebounce(busqueda, 500)

    return(
        <div>
            <Buscador />
            <PeliculasGrid key={debounceBusqueda} busqueda={debounceBusqueda}/>
        </div>
        
    )
}