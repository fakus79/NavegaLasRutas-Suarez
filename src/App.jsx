import './App.css'
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router';

export default function App() {

  //const [page, setPage] = useState("home");

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path ="/" element={
          <ItemListContainer mensaje="Bienvenido a mi agencia de tours"></ItemListContainer>  
          }>
        </Route>
        <Route path ="/detail" element={<h1>detalle</h1>}></Route>
        <Route path ="*" element={<h1>404 not found</h1>}></Route>
      </Routes>
    </BrowserRouter>

  )
}
