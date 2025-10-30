import './CartContainer.css';
import { useContext } from "react";
import { Link } from "react-router";
import cartContext from "../context/cartContext";
import { crearOrden } from '../../data/firebase';
import FormCheckout from './FormCheckout';



function CartContainer() {
    const { carrito, quitarItemCarrito, quitarItemsCarrito, precioCarrito, agregarAlCarrito, vaciarCarrito} = useContext(cartContext);

    // funcion que suma los datos del carrito a los del comprador que vinieron del form y llama al context para grabarlos
    async function FinalizarCompra(datosComprador){

    const orden = {
        comprador: datosComprador,
        items: carrito,
        preciofinal: precioCarrito(),
        fechacompra: new Date()
    };

    const nuevaOrden = await crearOrden(orden);
    //alert (`compra exitosa! nuevo id es ${nuevaOrden.id}`);
    vaciarCarrito();
}

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>
            {carrito.map(item =>

                <div className="cart-item" key={item.codigoTour}>

                    <Link to={`/detalleTour/${item.codigoTour}`}><img src={`../assets/${item.imgTour}`} className="item-img"></img></Link>
                    <div className="item-info">
                        <Link to={`/detalleTour/${item.codigoTour}`}><h4>{item.nombreTour}</h4></Link>
                        <p className="item-category">{item.categoriaTour}</p>
                    </div>

                    <div className="item-controls">
                        <div className="quantity-controls">
                            <button className="qty-btn" onClick={() => quitarItemCarrito(item.codigoTour)}>-</button>
                            <span className="quantity">{item.cantidad}</span>
                            <button className="qty-btn" onClick={() => agregarAlCarrito(item)}>+</button>
                        </div>
                        <div className="item-price">$ {item.precioPersona}</div>
                        <div className="item-total">$ {item.precioPersona * item.cantidad} </div>
                        <button className="remove-btn" onClick={() => quitarItemsCarrito(item.codigoTour)}>🗑</button>
                    </div>
                </div>
                )
            }

            { 
            //totalizador con renderizado condicional
            carrito.length === 0 ? (
                <>
                    <div className="cart-empty">
                        <p>🛒 Tu carrito está vacío</p>
                    </div>
                    <div>
                        <button className="clear-btn" disabled>Agregar items para finalizar la compra</button>
                        <Link to="/orders" className="cart-empty-orders">Ver órdenes existentes</Link>
                    </div>
                </>
            ) : (
                <>
                    <div className="cart-total">
                        <span>Total:</span>
                        <strong>$ {precioCarrito()}</strong>
                    </div>
                    <FormCheckout handler={FinalizarCompra}/>
                </>
            )}
        </div>
    )
}

export default CartContainer;
