import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <nav class="menu">
		<ul>
			<li><a href="index.html">Inicio</a></li>
			<li><a href="productos.html">Productos</a></li>
			<li><a href="contacto.html">Contacto</a></li>
		</ul>
	</nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenido Hector to Docker-Meetup</h1>
          
        </header>
        <div clas="secundaarios">
        
        </div>
        <p className="App-intro">
          Welcome to this Docker Meetup with Jenkins

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      
      
      
    );
  }
}

export default App;
