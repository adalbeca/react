import React, { Component } from 'react';
import PropType from 'prop-types';
import './css/Body.css';

class Footer extends Component {
  static propType={
    copy: PropType.string,
  }
  render() {
  const{copyright="CopyRight"}=this.props;
    return (
      <div className="body">
       <p> ESTE ES EL Footer</p>
       <h1>{copyright}</h1>
      </div>
    );
  }
}

export default Footer;