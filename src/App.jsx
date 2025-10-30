import './App.css'
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import OrderDetailContainer from "./components/OrderDetailContainer";
import OrdersContainer from "./components/OrdersContainer";
import CartContainer from "./components/CartContainer";
import { BrowserRouter, Routes, Route } from 'react-router';
import { CartProvider } from "./context/cartContext";


export default function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={
            <ItemListContainer mensaje="Bienvenido a BariTours, donde encontrará las mejores excursiones para realizar en Bariloche"></ItemListContainer>
          }>
          </Route>
          <Route path="/cat/:nombreCategoria" element={
            <ItemListContainer></ItemListContainer>
          }>
          </Route>
          <Route path="/detalleTour/:idTour" element={
            <ItemDetailContainer></ItemDetailContainer>
          }>
          </Route>
          <Route path="/orders/:idOrden" element={
            <OrderDetailContainer></OrderDetailContainer>
          }>
          </Route>
          <Route path="/orders/" element={
            <OrdersContainer></OrdersContainer>
          }>
          </Route>
          <Route path="/cart/" element={
            <CartContainer></CartContainer>
          }>
          </Route>
          <Route path="*" element={
            <h1>404: La página que está buscando no existe</h1>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

