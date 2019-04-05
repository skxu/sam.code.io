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
            lineHeight: 2,
            margin: '0 auto',
            marginBottom: '2rem',
            backgroundImage: 'url(' + this.props.thumbnail + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto 100%',
            backgroundPosition: '50% 50%',
            backgroundColor: 'rgb(44,44,44)',
            width: '35vw',
            maxWidth: '160px',
            height: '35vw',
            maxHeight: '160px',
            borderRadius: '3%',
            boxShadow: 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px'
          }}
        />
        <div
          style={{
            display: 'inline-block',
            textAlign: 'left',
            maxWidth: '450px',
            width: '75%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            paddingRight: '2rem',
            paddingLeft: '1rem',
            paddingBottom: '2rem'
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