import React from "react";
import "./Filters.css";

function Filters({tipoFiltros}) {
    return(
        <div>
            <div className="filters-right">
                <p className="title-filters">Filtros</p>
                {tipoFiltros.map((filtro, indice) => (
                    <div key={indice}>
                        <p className="subtitle-filters">{Object.keys(filtro)[0]}</p>
                        {Object.values(filtro)[0].map((opcion, index) => (
                            <div key={index}>
                                <div className="custom-checkbox">
                                    <input type="checkbox" id={opcion} name={opcion} value={opcion}/>
                                    <label className="option-filter" htmlFor={opcion}>{opcion}</label>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                <div className="line-deco-filter"></div>
                <div className="buttons-filter">
                    <button className="btn-filter btn-apply-filter">Aplicar filtros</button>
                    <button className="btn-filter btn-delete-filter">Borrar filtros</button>
                </div>
            </div>
        </div>
    )
}

export default Filters;