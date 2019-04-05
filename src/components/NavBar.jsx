import React, { Component } from 'react';
import { Link } from 'react-router';

import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Link to="/" className="NavItem">Home</Link>
        <Link to="/about" className="NavItem">About</Link>
        <Link to="/projects" className="NavItem">Projects</Link>
        <Link to="/quotes" className="NavItem">Quotes</Link>
        <Link to="/links" className="NavItem">Links</Link>
      </div>
    )
  }
}