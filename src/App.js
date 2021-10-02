import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <!--<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Docker-Meetup</h1>
        </header>
        <p className="App-intro">
          Welcome to this Docker Meetup with Jenkins*********************

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>-->
      <!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Login Here | Fazt</title>
    <link rel="stylesheet" href="css/master.css">
  </head>
  <body>
<div class="login-box"><br>
  <img class="avatar" src="img/logo.jpg" alt="Logo de FAzt">
  <h1>Login Here</h1>
  <form>
    <!-- USERNAME -->
    <label for="username">Username</label>
    <input type="text" placeholder="Enter Username"><br><br>
    <!-- Password -->
    <label for="password">Password</label>
    <input type="password" placeholder="Enter Password"><br><br>
    <input type="submit" value="Log In"><br><br>
    <a href="#">Lost your password?</a><br>
    <a href="#">Don't have an account?</a>
  </form>
  </body>
</html>
    );
  }
}

export default App;
