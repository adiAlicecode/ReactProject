import React, {Component} from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Routes from './Routes.js';
import { BrowserRouter } from "react-router-dom";
import './App.css'

class App extends Component
{
  render(){
    return(
    <BrowserRouter>
      <div>
        <Header />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
