import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pagina2 from './index.html';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenido Hector to Docker-Meetup</h1>
          <a href={pagina2}>Inicio</a>
        </header>
        <p className="App-intro">
          Welcome to this Docker Meetup with Jenkins

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      
      
      
    );
  }
}

export default App;
