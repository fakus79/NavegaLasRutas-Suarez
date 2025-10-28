import { useState, useContext } from 'react';
import cartContext from '../context/cartContext';

export default function ButtonAddToCart(props) {

    //let [status, setStatus] = useState("no agregado");

    const { agregarAlCarrito } = useContext(cartContext);
       
    return (        
        <div>            
            <button className="buttonCart" onClick={() => agregarAlCarrito(props.tourAgregar)}>Agregar visitante</button>
        </div>
    )

}
