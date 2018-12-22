import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar.jsx';
import Landing from './Components/Landing.jsx'
import Footer from './Components/Footer.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <header>
        <Navbar/>
       </header>
       <main>
       <Landing/>
       </main>
       <footer id="footer">
         <Footer/>
       </footer>
      </div>
    );
  }
}

export default App;
