
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, where, addDoc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FS_APIKEY,
  authDomain: "react-fs-4ab09.firebaseapp.com",
  projectId: import.meta.env.VITE_FS_PROJECT_ID,
  storageBucket: "react-fs-4ab09.firebasestorage.app",
  messagingSenderId: "121964273739",
  appId: import.meta.env.VITE_FS_APP_ID
};

// funcion helper que se llama una sola vez para cargar el array de excursiones a firebase
export async function cargaInicialExcursiones(){
  const ref = collection (bbdd,"excursiones");

  //recorro el array de excursiones agregandolas a fb, borro el id porque se autogenera 
  for (let item of excursiones){
    delete item.codigoTour;
    // convierto de objeto tipo Excursiones a objeto genérico para que funcione
    const nuevoDoc = await addDoc(ref,Object.assign({}, item));
    //console.log ("Creacion exitosa, id nuevo doc: ", nuevoDoc.id)
  }
}

// funcion para crear una orden de compra
export async function crearOrden(datosOrden){
  const refOrdenes = collection(bbdd, "ordenes");
  const nuevaOrden = await addDoc(refOrdenes, datosOrden);
  return nuevaOrden;
}

// funcion que obtiene todas las excursiones de la BBDD 
export async function obtenerExcursiones(){
  // conecto a la colección y creo un snapshot con los documentos de la misma
  const refExcursiones = collection(bbdd, "excursiones");
  const snapExcursiones = await getDocs(refExcursiones);

  //le agrego el id de cada documento aparte como "codigoTour"
  const docsExcursiones = snapExcursiones.docs.map(
      item => { return { codigoTour: item.id, ...item.data() } }
    );

  return docsExcursiones;
}


// función que devuelve los datos de una sola excursión según parámetro 
export async function obtenerExcursionId(idTour){
  // conecto a la colección y obtengo un documento que matchea con el parámetro
  const refExcursion = doc(bbdd, "excursiones", idTour);
  const snapExcursion = await getDoc(refExcursion);

  //le agrego el id al documento aparte como "codigoTour"
  const docExcursion = snapExcursion.data();
  docExcursion.codigoTour = snapExcursion.id;

  return docExcursion;
}

// función que devuelve los datos de una sola orden según parámetro 
export async function obtenerOrdenId(idOrden){
  // conecto a la colección y obtengo un documento que matchea con el parámetro
  const refOrden = doc(bbdd, "ordenes", idOrden);
  const snapOrden = await getDoc(refOrden);

  return snapOrden.data();
}

// funcion que obtiene todas las ordenes de la BBDD 
export async function obtenerOrdenes() {
  // conecto a la colección y creo un snapshot con las órdenes de la misma
  const refOrdenes = collection(bbdd, "ordenes");
  const snapOrdenes = await getDocs(refOrdenes);
  // devuelvo solo los datos agregando el ID 
  const ordenes = snapOrdenes.docs.map(doc => ({ id: doc.id, ...doc.data(), }));

  return ordenes;
}

// función que devuelve las excursiones filtradas por nombre de categoría
export async function obtenerExcursionesPorCategoria(nombreCategoria){
  let queryCateg = null;
  
  // conecto a la colección 
  const refExcursiones = collection(bbdd, "excursiones");

  //switch porque tengo algunas categorías con nombre normal, pero otras depeden de atributos de la excursión
  switch(nombreCategoria){
      case 'Poreldia':
          //filtro solo las que duran un día
          queryCateg = query(refExcursiones, where("diasDuracion","==",1));     
          break;
      case 'Variosdias':
          //filtro solo las que duran más un día
          queryCateg = query(refExcursiones, where("diasDuracion",">",1));     
          break;
      case 'Familiares':
          //filtro solo excursiones que son familiares
          queryCateg = query(refExcursiones, where("esFamiliar","==",true));
          break;
      case 'Dtoefvo':
          //filtro solo excursiones que tienen más de 0 descuento efvo
          queryCateg = query(refExcursiones, where("dtoEfvo",">",0));     
          break;
      default: {          
          //filtro por categorías según nombre del parámetro textual
          queryCateg = query(refExcursiones, where("categoriaTour","==",nombreCategoria));     
          }
  }

  // obtengo el snapshot del query filtrado
  const snapExcursiones = await getDocs(queryCateg);

  //le agrego el id de cada documento aparte como "codigoTour"
  const docsExcursiones = snapExcursiones.docs.map(
      item => { return { codigoTour: item.id, ...item.data() } }
    );

  return docsExcursiones;
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const bbdd = getFirestore(app);

export default app;
