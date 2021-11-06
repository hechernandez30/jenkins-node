import React, { Component } from 'react';
import './App.css';
import Category from './Category.js';
import Inicio from './Inicio';
import Productos from './Productos';
import Contacto from './Contacto';

var App = React.createClass({
  getInitialState: function() { return {query: ''} },
  queryChange: function(evt) {
    this.setState({query: evt.target.value});
  },
  _buildLinkHref: function() {
    return '/search/'+this.state.query+'/some-action';
  },
  render: function() {
    return (
      <div className="component-wrapper">
        <input type="text" value={this.state.query} />
        <a href={this._buildLinkHref()} className="button">
          Search
        </a>
      </div>
    );
  }
});

export default App;
