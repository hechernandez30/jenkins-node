import React, { Component } from 'react';
import './App.css';
import Category from './Category.js';
import Inicio from './Inicio';
import Productos from './Productos';
import Contacto from './Contacto';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>

          <Category name="Pagina de Inicio" items={['Mision','Vision','Objetivos']}/>
          <Category name="Productos" items={['Ofertas del Mes','Black Friday','En liquidacion']}/>
          <Category name="Contacto" items={['Sedes','Ubicacion','Video Informativo']}/>

        </ul>
      </div>
    );
  }
}

export default App;
