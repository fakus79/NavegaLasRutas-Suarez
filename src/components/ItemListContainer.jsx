import './ItemListContainer.css'
import excursiones from '../../data/excursiones';
import Excursion from './Excursion';

export default function ItemListContainer(props) {
  
  return (
    <>
      <div className="bienvenida"> {props.mensaje}</div>
      <div className="excursiones">
        {excursiones.map(excursion => (
          <Excursion key={excursion.codigoTour} {...excursion} />
        ))}
      </div>
    </>
  )
}

