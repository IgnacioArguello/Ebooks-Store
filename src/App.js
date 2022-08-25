import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Inicio from './components/Pages/Inicio';
import Contacto from './components/Pages/Contacto';
import Libros from './components/Pages/Libros';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <ItemListContainer/>
      </Router>
    </div>
  );
}

export default App;
