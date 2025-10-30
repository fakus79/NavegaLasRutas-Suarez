import './OrdersContainer.css'
import { obtenerOrdenes } from '../../data/firebase';
import { useState, useEffect } from 'react';
import { Link } from "react-router";


export default function OrdersContainer() {

    const [ordenes, setOrdenes] = useState(null); 

    useEffect(() => {
        //codigo para obtener las ordenes mediante promesa
        obtenerOrdenes()
            .then((value) => {
                setOrdenes(value);  //caso exitoso, uso setter para asignar el valor obtenido 
            })
            .catch((error) => {
                console.error("Hubo un error al recuperar las ordenes: " + error);  //caso error, muestro por consola
            })
    }, [])

    return (
        //renderizado condicional para el spinner de carga o sino
        //recuadro que muestra la lista de ordenes o que no hay ninguna
        <div className="order-container">
            {
                !ordenes && (
                    <div className="loading">
                        <span>Cargando ordenes de la base de datos</span>
                        <img width="50px" src="../assets/loading.gif" />
                    </div>
                )
            }
            {ordenes && (
                <>
                    <div className="lista-ordenes">
                        <h2>Órdenes registradas</h2>

                        {(!ordenes || ordenes.length === 0) ? (
                            <p className="no-ordenes">No hay órdenes registradas.</p>
                        ) : (
                            <table className="tabla-ordenes">
                                <thead>
                                    <tr>
                                        <th>ID de orden</th>
                                        <th>Fecha de compra</th>
                                        <th>Precio final</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ordenes.map((orden) => {
                                        
                                        return (
                                            <tr key={orden.id}>
                                                <td>
                                                    <Link to={`/orders/${orden.id}`} className="orden-id-link">
                                                        {orden.id}
                                                    </Link>
                                                </td>
                                                <td>
                                                    {new Date(orden.fechacompra.seconds * 1000)
                                                    .toLocaleDateString("es-AR", { weekday: "long", day: "numeric", month: "long", year: "numeric", })}
                                                </td>
                                                <td>$ {orden.preciofinal}</td>
                                            </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}
