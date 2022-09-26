
import './App.css';
import { Header } from './components/Header';
import { List } from './components/List';
import {BaseColaboradores} from './base/BaseColaboradores';
import { Add } from './components/Add';
import { useState } from 'react';

function App() {

  const [listado, setListado] = useState(BaseColaboradores);
  const [listadoFiltrado, setListadoFiltrado] = useState(BaseColaboradores);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target[0].value;
    const correo = e.target[1].value;

    if(nombre === '' || correo === ''){
      return;
    }

    const nuevoListado = [
      ...listado,
      {
        id: listado.length + 1,
        nombre: nombre,
        correo: correo
      }
    ];

    setListadoFiltrado(nuevoListado);
    setListado(nuevoListado);
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    const ingresado = e.target.value.toLowerCase();
    const filtrado = listado.filter( obj => obj.nombre.toLowerCase().includes(ingresado) 
                                          || obj.correo.toLowerCase().includes(ingresado));
    console.log(filtrado);
    setListadoFiltrado(filtrado);
  }

  return (
    <div className="App">
      <Header buscar={handleChange}/>
      <main className='container'>
        <Add submit={handleSubmit}/>
        <div 
          className="h4 pb-2 mb-4 text-danger border-bottom border-danger">
        </div>
      </main>
      <List listado={listadoFiltrado} />
    </div>
  );
}

export default App;
