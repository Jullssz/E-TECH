import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderConFooter from './components/headerConFooter/HeaderConFooter';
import Inicio from './components/inicio/Inicio';
import Nosotros from './components/nosotros/Nosotros';
import Productos from './components/productos/Productos';
import Contacto from './components/contacto/Contacto';
import DetalleCards from './components/detalleCards/DetalleCards';
import ContextProvider from './components/contextProvider/ContextProvider';
import CarritoDeCompras from './components/carritoDeCompras/CarritoDeCompras';
import Checkout from './components/checkout/Checkout';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <HeaderConFooter>
          <Routes>
            <Route path='/' element={<Inicio />} exact />
            <Route path='/productos' element={<Productos />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/productos/:id' element={<DetalleCards />} />
            <Route path='/carrito' element={<CarritoDeCompras />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </HeaderConFooter>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
