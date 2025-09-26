import './App.css'
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

export default function App() {

  
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer mensaje="Bienvenido a mi agencia de tours"></ItemListContainer>
    </>
  )
}
