import './CartWidget.css';
import { useContext } from 'react';
import cartContext from '../context/cartContext';


export default function CartWidget() {

  const contexto=useContext(cartContext);
  return (
    <>
    <div className="navbar-cart">
        <img src="./assets/cart.png" /> {contexto}
    </div >
    </>
  )
}

