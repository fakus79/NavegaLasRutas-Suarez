import excursiones from './excursiones';

// funcion que usa una promesa para simular que se tarda en devolver array de excursiones
export default function obtenerExcursiones(){
    
    const promiseExcursiones = new Promise ( (resolve,reject) =>{
        //uso timeout para devolver el array a los 4000 milisegundos
        setTimeout( () => {
            //comentar o descomentar para simular éxito/error recuperando datos
            resolve(excursiones); 
            //reject("Base de datos no operativa"); 
        }, 4000)  
    })
    
    return promiseExcursiones;
}