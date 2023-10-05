import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderConFooter from './components/headerConFooter/HeaderConFooter';
import Inicio from './components/inicio/Inicio';
import Nosotros from './components/nosotros/Nosotros';
import Productos from './components/productos/Productos';
import Contacto from './components/contacto/Contacto'; 
import DetalleCards from './components/detalleCards/DetalleCards';

function App() {
  return (
    <BrowserRouter>
      <HeaderConFooter>
        <Routes>
          <Route path='/' element={<Inicio/>} exact/>
          <Route path='/productos' element={<Productos/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/productos/:id' element={<DetalleCards/>}/>
        </Routes>
      </HeaderConFooter>
    </BrowserRouter>
  );
}

export default App;
