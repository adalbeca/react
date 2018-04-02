//Dependencias
import React, { Component } from 'react';

//Compontentes
import Header from './Global/Header';
import Body from './Global/Body';
import Footer from './Global/Footer';

//Data
import items from '../data/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="My First Project" items={items}/>
        <Body/>
        <Footer copyright="&copy; Creatika 2018"/>
      </div>
    );
  }
}

export default App;
