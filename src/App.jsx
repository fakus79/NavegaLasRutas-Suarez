import './App.css'
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router';
import app from '../data/firebase';
import firebase from 'firebase/compat/app';

export default function App() {

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path ="/" element={
          <ItemListContainer mensaje="Bienvenido a BariTours, donde encontrará las mejores excursiones para realizar en Bariloche"></ItemListContainer>  
          }>
        </Route>
        <Route path ="/cat/:nombreCategoria" element={
          <ItemListContainer></ItemListContainer>
          }>
        </Route>
        <Route path ="/detalleTour/:idTour" element={
          <ItemDetailContainer></ItemDetailContainer>
          }>
        </Route>
        <Route path ="*" element={
          <h1>404: La página que está buscando no existe</h1>
          }>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}
