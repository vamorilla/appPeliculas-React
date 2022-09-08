import React from 'react';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { useQuery } from '../hooks/useQuery';
import styles from './Buscador.module.css';
import { FaSearch } from 'react-icons/fa';

export function Buscador() { 
    
    const query = useQuery();
    const busqueda = query.get("buscar");

    const [ textoBuscado, setTextoBuscado ] = useState("");
    const navegacion =  useNavigate();

    useEffect(() => {
        setTextoBuscado(busqueda || "");
    }, [busqueda]);

    const manejoForm = (e)=> {
        e.preventDefault();
        navegacion("/?buscar=" + textoBuscado);
    };

    return(
        <form className={styles.contenedor} onSubmit={manejoForm}>
            <div className={styles.inputBtn}>
                <input 
                    className={styles.input} 
                    type="text" 
                    value={textoBuscado} 
                    onChange={(e)=> setTextoBuscado(e.target.value.toLowerCase())} 
                />
                <button className={styles.btnBuscar} type="submit">
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    )
}