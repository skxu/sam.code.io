import React, { Component } from 'react';
import './NotFound.css';

export default class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        <h1>Page Not Found</h1>
        <img src="404.svg" role="presentation" style={{margin: '0 auto', display:'block'}} width='100%'/>
      </div>
    )
  }
}