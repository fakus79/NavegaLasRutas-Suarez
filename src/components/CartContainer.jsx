import './CartContainer.css';
import { useContext } from "react";
import { Link } from "react-router";
import cartContext from "../context/cartContext";
import { crearOrden } from '../../data/firebase';

async function FinalizarCompra(datosOrdenCompra){
    const nuevaOrden = await crearOrden(datosOrdenCompra);
    alert (`compra exitosa! nuevo id es ${nuevaOrden.id}`);
    vaciarCarrito();
}

function CartContainer() {
    const { carrito, quitarItemCarrito, quitarItemsCarrito, precioCarrito, agregarAlCarrito, vaciarCarrito} = useContext(cartContext);

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
                    <button className="checkout-btn disabled" disabled>Finalizar compra</button>
                </>
            ) : (
                <>
                    <div className="cart-total">
                        <span>Total:</span>
                        <strong>$ {precioCarrito()}</strong>
                    </div>
                    <button className="checkout-btn" onClick={FinalizarCompra}>Finalizar compra</button>
                </>
            )}
        </div>
    )
}

export default CartContainer;
