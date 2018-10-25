import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App fd-ui fd-ui--fundamental">
        <div className="fd-ui__header">
          <nav className="fd-global-nav">
            <div className="fd-global-nav__group fd-global-nav__group--left">
              <div className="fd-global-nav__product-name">Fiori Fundamentals on React</div>
            </div>
          </nav>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
