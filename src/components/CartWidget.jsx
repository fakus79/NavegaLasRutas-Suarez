import './CartWidget.css';
import { useContext } from 'react';
import cartContext from '../context/cartContext';


export default function CartWidget() {

  const { contarItemsCarrito } = useContext(cartContext);
  
  return (    
    <div>
        <span className="navbar-cart">  {contarItemsCarrito()}</span>
    </div>
    
  )
}


