import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
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
        <ItemDetailContainer/>
      </Router>
    </div>
  );
}

export default App;
