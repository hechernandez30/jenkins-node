import React, { Component } from 'react';
import './App.css';
import Category from './Category.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <Category name="Pagina de Inicio"/>
          <Category name="Productos"/>
          <Category name="Contacto"/>
        </ul>
      </div>
    );
  }
}

export default App;
