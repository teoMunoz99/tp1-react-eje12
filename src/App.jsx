import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';
import { Fragment } from 'react';


function App() {

  return (
    <section id="main">
      <Titulo></Titulo>
      <Formulario></Formulario>
      <footer className='bg-dark text-light text-center p-4'>
        <p>Todos los derechos reservados</p>
      </footer>
    </section>
  )
}

export default App
