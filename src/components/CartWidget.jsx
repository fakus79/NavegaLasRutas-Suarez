import './CartWidget.css';
import { useContext } from 'react';
import cartContext from '../context/cartContext';


export default function CartWidget() {

  const { contarItems } = useContext(cartContext);
  
  return (    
    <div>
        <span className="navbar-cart">  {contarItems()}</span>
    </div>
    
  )
}


