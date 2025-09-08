import './NavBar.css'
import CartWidget from './CartWidget';

export default function NavBar() {

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-logo">
          <img src='./assets/logo.png' />
        </div>

        <div className="navbar-categories">
          <a href="#">Excursiones Tradicionales</a>
          <a href="#">Familiares </a>
          <a href="#">Lacustres</a>
          <a href="#">Por el día</a>
          <a href="#">Dto Efectivo</a>
        </div>

        <CartWidget></CartWidget>

      </div>
    </nav>
  )
}
