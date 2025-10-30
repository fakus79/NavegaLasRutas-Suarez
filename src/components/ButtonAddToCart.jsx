import { useState, useContext } from 'react';
import cartContext from '../context/cartContext';

export default function ButtonAddToCart(props) {

    const { agregarAlCarrito } = useContext(cartContext);
       
    return (        
        <div>            
            <button className="buttonCart" type="button" onClick={() => agregarAlCarrito(props.tourAgregar)}>Agregar visitante</button>
        </div>
    )

}
