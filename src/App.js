import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';



function App() {
  const greeting = {
    title: "Bienvenido a nuestro catálogo"
  }
  return (
    <div className="App">
      <Router>
        <CartProvider>
        <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={greeting}/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting={greeting}/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
