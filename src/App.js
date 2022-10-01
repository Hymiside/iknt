import React, { Component } from 'react';

import './App.css';
import Header from "./components/Header";
import Menu from "./components/Menu";
import NewsList from "./components/NewsList";
import News from "./components/News";
import Graduates from "./components/Graduates";
import Footer from "./components/Footee";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <NewsList />
        <News />
        <Graduates />
        <Footer />
      </div>
    );
  }
}

export default App;
