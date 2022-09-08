import './App.css';
import { BrowserRouter as Router, Switch,Routes,Route} from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Inicio from './components/Pages/Inicio';
import Contacto from './components/Pages/Contacto';
import Libros from './components/Pages/Libros';


function App() {
  const greeting = {
    title: "Bienvenidos"
  }
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={greeting}/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting={greeting}/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
