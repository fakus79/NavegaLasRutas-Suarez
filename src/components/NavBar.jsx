import './NavBar.css'
import CartWidget from './CartWidget';
import { Link } from 'react-router';

export default function NavBar() {

  return (
    // navegación: logo, home, categorías, link a carrito
    <nav>
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/"> <img src='/assets/logo.png' /> </Link>
        </div>
        <div className="navbar-categories">
          <Link to="/"> <span>Home</span> </Link>
          <Link to="/cat/tradicionales"> <span>Tradicionales</span> </Link>
          <Link to="/cat/invernales"> <span>Invernales</span> </Link>
          <Link to="/cat/lacustres"> <span>Lacustres</span> </Link>
          <Link to="/cat/familiares"> <span>Familiares</span> </Link>
          <Link to="/cat/poreldia"> <span>Por el día</span> </Link>
          <Link to="/cat/variosdias"> <span>Varios días</span> </Link>
          <Link to="/cat/dtoefvo">  <span>Dto Efectivo</span> </Link>
        </div>
        <div className="navbar-right">
          <Link to="/orders" className="navbar-orders">Órdenes </Link>
          <Link to="/Cart" className="navbar-cart"><CartWidget/></Link>
        </div>
      </div>
    </nav>
  )
}
