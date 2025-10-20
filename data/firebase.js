// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, addDoc } from "firebase/firestore";
import excursiones from "./excursiones";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr63nDHMuR5uLcRXYuTT9XcOeSm8GLohU",
  authDomain: "react-fs-4ab09.firebaseapp.com",
  projectId: "react-fs-4ab09",
  storageBucket: "react-fs-4ab09.firebasestorage.app",
  messagingSenderId: "121964273739",
  appId: "1:121964273739:web:182fb752d00f215c5cadce"
};

// funcion helper que se llama una sola vez para cargar el array de excursiones a firebase
export async function cargaInicialExcursiones(){
  const Ref = collection (bbdd,"excursiones");

  //recorro el array de excursiones, borro el id porque se autogenera 
  for (let item of excursiones){
    delete item.codigoTour;
    // convierto de objeto tipo Excursiones a objeto genérico para que funcione
    const nuevoDoc = await addDoc(Ref,Object.assign({}, item));
    //console.log ("Creacion exitosa, id nuevo doc: ", nuevoDoc.id)
  }
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const bbdd = getFirestore(app);

export default app;
