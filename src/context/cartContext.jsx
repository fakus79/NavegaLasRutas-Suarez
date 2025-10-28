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

    function contarItemsCarrito(){
        let cantidad=0;
        carrito.forEach(item =>cantidad+=item.cantidad);
        return cantidad;
    }

    function precioCarrito(){
        let precio=0;
        carrito.forEach(item =>precio+=item.cantidad*item.precioPersona);
        return precio;
    }

    function quitarItemCarrito(codigoTour){
        let nuevoCarrito = structuredClone(carrito);

        const itemEnCarrito = nuevoCarrito.find(item => item.codigoTour===codigoTour);
        const cantidad = itemEnCarrito.cantidad;

        if (cantidad > 1) {
            const indice = nuevoCarrito.findIndex(item => item.codigoTour===codigoTour)
            nuevoCarrito[indice].cantidad--;
        }
        else {
            nuevoCarrito = nuevoCarrito.filter(item => item.codigoTour !== codigoTour)
        }

        setCarrito(nuevoCarrito);
    }

    function quitarItemsCarrito(codigoTour){
        let nuevoCarrito = structuredClone(carrito);

        nuevoCarrito = nuevoCarrito.filter(item => item.codigoTour !== codigoTour)
        
        setCarrito(nuevoCarrito);
    }

    return(
        <cartContext.Provider value={ {agregarAlCarrito, contarItemsCarrito, quitarItemCarrito, quitarItemsCarrito, carrito, precioCarrito} }>
            {props.children}
        </cartContext.Provider>
    )
}

export default cartContext;

