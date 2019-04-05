import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';
import './ProjectsPage.css';

export default class ProjectsPage extends Component {

  render() {
    return (
      <div className="ProjectsPage">
        <h1>Projects</h1>
        <ProjectCard
          thumbnail="/paw.png"
          style={{
            backgroundColor:'rgb(86, 74, 73)',
            marginBottom: '3rem'  
          }}
          title="Spoor"
          description={
            <div>
              <p>Finance tracking and analytics frontend app & api.</p>
              <p>Javascript, React, MongoDB, NodeJS</p>
              <p><a className="link">Coming Soon</a></p>
            </div>
          }
        />
        <ProjectCard 
          thumbnail="https://i.imgur.com/MiYS01A.png"
          style={{
            backgroundColor:'rgb(121, 64, 62)',
            marginBottom: '3rem'  
          }}
          title="Path of Puzzles"
          description={
            <div>
              <p>Reimplemented Puzzles & Dragons in javascript, playable in browser.</p>
              <p>Javascript, Phaser</p>
              <p><a className="link" href="http://code.io/pop">Try it ></a></p>
              <p style={{fontSize:'0.6rem'}}>Puzzle & Dragons logo and all related images are registered
                trademarks or trademarks of GungHo Online Entertainment, Inc.</p>
            </div>
          }
        />
        <ProjectCard 
          thumbnail="/chest.png"
          style={{
            backgroundColor:'rgb(146, 104, 84)',
            marginBottom: '3rem'  
          }}
          title="Treasure TD"
          description={
            <div>
              <p>Android tower defense game inspired by Gem TD from Warcraft III.</p>
              <p>Android, Libgdx, Java</p>
              <p><a className="link" href="https://gitlab.com/skxu/honeyjar">View Source ></a></p>
              <p><a className="link" href="https://drive.google.com/open?id=1i0siyKsH8l13IDxWOJiJ_hlBgfubDOh6">Get APK ></a></p>
            </div>
          }
        />
        <ProjectCard 
          thumbnail="https://i.imgur.com/iE6zaKy.jpg"
          style={{
            backgroundColor:'#334E4E',
            marginBottom: '3rem'  
          }}
          title="Honey Jar"
          description={
            <div>
              <p>Share interesting articles and links with friends. Create private curated reading lists that you can share to from other apps.
              Available as webapp or android app. </p>
              <p>Meteor, MongoDB</p>
              <p><a className="link" href="https://gitlab.com/skxu/honeyjar">View Source ></a></p>
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
              <p>Quintus, Skulpt transpiler, Bootstrap</p>
              <p><a className="link" href="http://code.io/app">Try it ></a></p>
            </div>
          }
        />
        <ProjectCard 
          thumbnail="http://i.imgur.com/5r76iew.gif"
          style={{
            backgroundColor: 'rgb(73, 94, 132)',
            marginBottom: '3rem'
          }}
          title="Fluid Simulation"
          description={
            <div>
              <p>Fluid simulation with multithreading.</p>
              <p>C++, OpenGL</p>
              <p><a className="link" href="http://code.io/sph/">View Gifs ></a></p>
            </div>
          }
        />
        <ProjectCard 
          thumbnail="/data.png"
          style={{
            backgroundColor: 'rgb(44, 53, 72)',
            marginBottom: '3rem'
          }}
          title="DDoS Detection"
          description={
            <div>
              <p>Trained a DDoS detection model using various sets of webtraffic data.</p>
              <p>D3.js, Python</p>
              <p><a className="link" href="http://code.io/banana/">View Charts ></a></p>
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
              <p>Javascript, Rot.js</p>
              <p><a className="link" href="http://code.io/treasure/">Try it ></a></p>
            </div>
          }
        />
      </div>
    )
  }
}