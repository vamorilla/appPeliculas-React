import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useQuery } from '../hooks/useQuery';
import styles from './Buscador.module.css';
import { FaSearch } from 'react-icons/fa';

export function Buscador() { 
    
    const query = useQuery();
    const busqueda = query.get("buscar");

    const navegacion =  useNavigate();

    const manejoForm = (e)=> {
        e.preventDefault();
    };

    return(
        <form className={styles.contenedor} onSubmit={manejoForm}>
            <div className={styles.inputBtn}>
                <input 
                    className={styles.input} 
                    type="text" 
                    value={busqueda || ""} 
                    onChange={(e)=> {
                        const valor = e.target.value.toLowerCase();
                        navegacion("/?buscar=" + valor);
                        
                    }} 
                />
                
                <FaSearch size={20} className={styles.btnBuscar} />
                
            </div>
        </form>
    )
}