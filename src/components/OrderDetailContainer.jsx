import './OrdersContainer.css'
import { useParams } from "react-router";
import { obtenerOrdenId } from '../../data/firebase';
import { useState, useEffect } from 'react';


export default function OrderDetailContainer() {

    // la orden me llega por parámetros y la busco en el array
    const { idOrden } = useParams();
    const [ordenElegida, setOrden] = useState(null); //por defecto orden seleccionada null para renderizado condicional

    useEffect(() => {
        //codigo para obtener la orden mediante promesa
        obtenerOrdenId(idOrden)
            .then((value) => {
                //console.log(value);
                setOrden(value);  //caso exitoso, uso setter para asignar el valor obtenido 
            })
            .catch((error) => {
                console.error("Hubo un error al recuperar la orden: " + error);  //caso error, muestro por consola
            })
    }, [idOrden])

    return (
        //renderizado condicional para el spinner de carga o sino
        //recuadro que muestra los detalles de una orden
        <div className="order-container">
            {
                !ordenElegida && (
                    <div className="loading">
                        <span>Cargando orden de la base de datos</span>
                        <img width="50px" src="../assets/loading.gif" />
                    </div>
                )
            }
            {ordenElegida && (
                <>
                    <div className="order-container">
                        <h2 className="order-title">Resumen de la orden</h2>

                        <div className="order-info">
                            <p><strong>Nombre:</strong> {ordenElegida.comprador.nombre}</p>
                            <p><strong>Email:</strong> {ordenElegida.comprador.email}</p>
                            <p><strong>Teléfono:</strong> {ordenElegida.comprador.telefono}</p>
                            <p><strong>Fecha de compra:</strong> {new Date(ordenElegida.fechacompra.seconds * 1000).toLocaleDateString("es-AR", { weekday: "long", day: "numeric", month: "long", year: "numeric", })}</p>
                            <p><strong>Total pagado:</strong> $ {ordenElegida.preciofinal}</p>
                        </div>
                        <h3 className="order-subtitle">Tours adquiridos</h3>
                        <div className="order-items">
                            {ordenElegida.items.map((item, i) => (
                                <div className="order-item" key={i}>
                                    <img src={`../assets/${item.imgTour}`} alt={item.nombreTour} className="order-item-img" />
                                    <div className="order-item-info">
                                        <h4>{item.nombreTour}</h4>
                                        <p className="categoria">{item.categoriaTour}</p>
                                        <p>Cantidad de visitantes: {item.cantidad}</p>
                                        <p>Precio por persona: $ {item.precioPersona}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
