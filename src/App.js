import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Docker-Mesetup</h1>
        </header>
        <p className="App-intro">
          Welcome to this Docker Meetup with Jenkins

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <body>
      
      <div id="principal">
			<header>
				<div id="logo">
					<h2 class="titulo">Bienvenidos</h2>
					<p class="sub-titulo">Sistemas Operativos I</p>
				</div>

				<nav class="menu">
					<ul>
						<li><a href="index.html">Inicio</a></li>
						<li><a href="productos.html">Productos</a></li>
						<li><a href="contacto.html">Contacto</a></li>
					</ul>
				</nav>
			</header>

			<section id="slide">
				<img src="img/slide.jpg" width="900" height="250">
			</section>

			<section id="categorias">
				<section class="uno">
					<img src="img/disenio_web.png" width="250" height="150" >
					<h2>Misión</h2>
					<p class="parrafo">
						Lograr una mejor calidad de vida para nuestros clientes, proveendo equipos confiables
						y duraderos, logrando asi un mejor desarrollo a nivel de pais.<br><br><br><br><br>
					</p>
					<a href="" class="leer-mas">Leer más</a><br><br>
				</section>
				<section class="uno dos">
					<img src="img/programacion.png" width="250" height="150" >
					<h2>Visión</h2>
					<p class="parrafo">
						Ser la primera opcion a elegir al momento de pensar en una empresa solida y confiable que pueda
						reparar mi equipo de cómputo.<br><br><br><br><br>
					</p>
					<a href="" class="leer-mas">Leer más</a><br><br>
				</section>
				<section class="uno">
					<img src="img/redes.png" width="250" height="150" >
					<h2>Objetivos</h2>
					<p class="parrafo">
						1. Reducir a cero, los miedos de los clientes actuales al momento de
						   entregar su equipo a un desconocido para que lo repare.<br>
						2. Cobrar lo justo y necesario, evitando cobros escondidos.<br>
						3. Proveer los mejores equipos a toda la region.
					</p>
					<a href="" class="leer-mas">Leer más</a><br><br>
				</section>
			</section><!--/categorias-->

			<footer>
				<p>
					(c) Todos los derechos reservados - Sistemas Operativos I - 2021 <br>

				</p>
			</footer>


		</div>
      
      </body>
    );
  }
}

export default App;
