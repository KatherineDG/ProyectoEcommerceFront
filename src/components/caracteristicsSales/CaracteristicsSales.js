import React from "react";
import './CaracteristicsSales.css';

function CaracteristicsSales({urlIcono, titulo, subtitulo}) {
    return(
        <div>
            <div className="contenedor-caracteristica">
                <img className="icono-caracteristica" src={urlIcono} alt="zapato"/>
                <h1 className="titulo-caracteristica">{titulo}</h1>
                <p className="subtitulo-caracteristica">{subtitulo}</p>
            </div>
        </div>
    )
}

export default CaracteristicsSales;