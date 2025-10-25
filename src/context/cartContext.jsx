import {createContext, useState } from 'react';

const cartContext = createContext();

export function CartProvider(props){
    const [carrito, setCarrito] = useState([]);
    console.log(carrito);

    function agregarAlCarrito(item){
        // copio el carrito existente y le agrego el item nuevo
        const nuevoCarrito = structuredClone(carrito);
        
        const indice = carrito.findIndex(i => i.codigoTour === item.codigoTour)

        if (indice<0)
            nuevoCarrito.push( {...item, cantidad:1});
        else
            nuevoCarrito[indice].cantidad++;
        
        setCarrito(nuevoCarrito);
        //alert(`Agregaste ${item.nombreTour}`);
    }

    function contarItems(){
        let cantidad=0;
        carrito.forEach(item =>cantidad+=item.cantidad);
        console.log(cantidad);
        return cantidad;
    }

    function quitarItem(codigoTour){
        let nuevoCarrito = structuredClone(carrito);

        const itemEnCarrito = nuevoCarrito.find(item => item.codigoTour===codigoTour);
        const cantidad = nuevoCarrito.cantidad;

        if (cantidad > 1) {
            const indice = nuevoCarrito.findIndex(item => item.codigoTour===codigoTour)
            nuevoCarrito[indice].cantidad--;
        }
        else {
            nuevoCarrito = nuevoCarrito.filter(item => item.codigoTour !== codigoTour)
        }

        setCarrito(nuevoCarrito);
    }

    return(
        <cartContext.Provider value={ {agregarAlCarrito, contarItems, quitarItem, carrito} }>
            {props.children}
        </cartContext.Provider>
    )
}

export default cartContext;

