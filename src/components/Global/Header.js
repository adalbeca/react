//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Assets
import logo from './img/logo.svg';
import './css/Header.css';



class Header extends Component {
  static propTypes={
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  }
  render() {
    const {title, items} = this.props;

    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo}  alt="logo" />
          <h1 className="App-title">{title}</h1>
        </header>
        <p className="App-intro">
          <ul className="menu">
            {items.map((item,key)=><li key={key}>{item.title}</li>)}
          </ul>
        </p>
      </div>
    );
  }
}

export default Header;