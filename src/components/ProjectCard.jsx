import React, { Component } from 'react';
import './ProjectCard.css';

export default class ProjectCard extends Component {

  render() {
    return (
      <div 
        className="ProjectCard"
        style={this.props.style}
      >
        <div 
          style={{
            top: '50%',
            position: 'relative',
            display: 'inline-block',
            backgroundImage: 'url(' + this.props.thumbnail + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto 100%',
            backgroundPosition: '50% 50%',
            backgroundColor: 'rgb(44,44,44)',
            height: '160px',
            width: '160px',
            borderRadius: '3%',
            boxShadow: 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px'
          }}
        />
        <div
          style={{
            display: 'inline-block',
            marginLeft: '2rem',
            width: 'calc(100% - 220px)',
            textAlign: 'left',
            maxHeight: 228,
            textOverflow: 'ellipsis'
          }}
        >
          <h4>{this.props.title}</h4>
          <div>
            {this.props.description}
          </div>
        </div>

      </div>
    )
  }
}