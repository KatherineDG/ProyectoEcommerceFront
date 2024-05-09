import React, { useEffect, useState } from "react";
import './Products.css'
import CardProductSquare from "../components/cardProductSquare/CardProductSquare";
import Filters from "../components/filters/Filters";

function Products() {
    const [isMobile, setIsMobile] =  useState(false);
    const [seeFiltersMobile, setSeeFiltersMobile] = useState(false);

    const activarFiltrosMobile = () => {
        if (seeFiltersMobile === true) {
            setSeeFiltersMobile(false);
            var botonEsconderFiltros = document.querySelector('.btn-filter-products-move');
            botonEsconderFiltros.className = 'btn-filter-products';
            var iconoEsconderFiltros = document.querySelector('.icon-arrow-filter');
            iconoEsconderFiltros.src = './images/icons/icon_flecha.png';
        } else {
            setSeeFiltersMobile(true);
            var botonMostrarFiltros = document.querySelector('.btn-filter-products');
            botonMostrarFiltros.className = 'btn-filter-products-move';
            var iconoMostrarFiltros = document.querySelector('.icon-arrow-filter');
            iconoMostrarFiltros.src = './images/icons/icon_flecha_reversa.png';
        }
    }

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768); // Cambia 768 por el ancho que consideres para dispositivos móviles
        };
    
        handleResize(); // Llama a la función para establecer el estado inicial
    
        window.addEventListener('resize', handleResize); // Agrega un event listener para detectar cambios en el tamaño de la pantalla
    
        return () => {
          window.removeEventListener('resize', handleResize); // Limpia el event listener cuando el componente se desmonta
        };
      }, []);
    
    const tipoFiltros = [{"Ordenar por": ["Mas vendidos", "Populares"]}, {"Color": ["Blanco", "Negro"]}, {"Talle": ["35", "36", "37", "38", "39", "40"]}];
    return (
        <div className="body">
            <h1 className="title-products">Todos los productos</h1>
            {isMobile ? 
                <div>
                    <div className="filter-products">
                        <p>Filtros</p><button className="btn-filter-products" onClick={activarFiltrosMobile}> <img className="icon-arrow-filter" src="./images/icons/icon_flecha.png" alt="flecha"/> </button>
                    </div>
                    {seeFiltersMobile ? 
                        <div><Filters tipoFiltros={tipoFiltros}/></div>
                    :
                        <div></div>
                    }
                    
                </div>
            :
                <div>
                    <Filters tipoFiltros={tipoFiltros}/>
                </div>
            }
            <div className="products">
                <CardProductSquare urlImage={'/images/zapatogoticuno.jpg'} nameProduct={'GOTIC'} priceNowProduct={'$50.000,00'} inDiscount={false}/>
                <CardProductSquare urlImage={'/images/zapatosimplewuno.jpg'} nameProduct={'SIMPLE W'} priceNowProduct={'$40.000,00'} inDiscount={true} priceLastProduct={'$45.000,00'} porcentageDiscount={'11'}/>
                <CardProductSquare urlImage={'/images/zapatoextrauno.jpg'} nameProduct={'EXTRA'} priceNowProduct={'$50.000,00'} inDiscount={false}/>
            </div>
            <div className="products">
                <CardProductSquare urlImage={'/images/zapatogoticuno.jpg'} nameProduct={'GOTIC'} priceNowProduct={'$50.000,00'} inDiscount={false}/>
                <CardProductSquare urlImage={'/images/zapatosimplewuno.jpg'} nameProduct={'SIMPLE W'} priceNowProduct={'$40.000,00'} inDiscount={true} priceLastProduct={'$45.000,00'} porcentageDiscount={'11'}/>
                <CardProductSquare urlImage={'/images/zapatoextrauno.jpg'} nameProduct={'EXTRA'} priceNowProduct={'$50.000,00'} inDiscount={false}/>
            </div>
        </div>
    )
}

export default Products;