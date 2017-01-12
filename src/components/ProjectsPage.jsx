import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';
import './ProjectsPage.css';

export default class ProjectsPage extends Component {

  render() {
    return (
      <div className="ProjectsPage">
        <h1>Projects</h1>
        <ProjectCard 
          thumbnail="http://honeyjar.code.io/img/honey-bg.jpg"
          style={{
            backgroundColor:'#334E4E',
            marginBottom: '3rem'  
          }}
          title="Honey Jar"
          description={
            <div>
              <p>Share interesting articles and links with friends. Create private curated reading lists that you can share to from other apps.
              Available as webapp or android app. </p>
              <p>Made using Meteor JS framework.</p>
              <p><a className="link" href="http://honeyjar.code.io">Try it ></a></p>
            </div>
          }
        />
        <ProjectCard 
          thumbnail="http://i.imgur.com/goZqHc3.gif"
          style={{
            backgroundColor: '#817355',
            marginBottom: '3rem'
          }}
          title="Code IO"
          description={
            <div>
              <p>Fusion between entertainment and education. 
              Learn to program by playing a unique platformer that utilizes pythong programming in-game.
              </p>
              <p>Made using Quintus game engine and Skulpt transpiler.</p>
              <p><a className="link" href="http://code.io/app">Try it ></a></p>
            </div>
          }
        />
        <ProjectCard 
          thumbnail="http://i.imgur.com/eDnhsQR.gif"
          style={{
            backgroundColor: '#446844'
          }}
          title="Treasure"
          description={
            <div>
              <p>Proof of concept multiplayer roguelike game.</p>
              <p>Made using Rot.js framework.</p>
              <p><a className="link" href="http://code.io/treasure/">Try it ></a></p>
            </div>
          }
        />
      </div>
    )
  }
}