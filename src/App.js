import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Teachers from './Teachers';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Teachers />
        <Footer />
      </div>
    );
  }
}

export default App;
