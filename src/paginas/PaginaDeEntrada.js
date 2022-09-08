import React from 'react';
import { PeliculasGrid } from "../componentes/PeliculasGrid";
import { Buscador } from '../componentes/Buscador';
export function PaginaDeEntrada() {
    return(
        <div>
            <Buscador />
            <PeliculasGrid />
        </div>
        
    )
}