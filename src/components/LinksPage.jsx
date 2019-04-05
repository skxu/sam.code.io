import React, { Component } from 'react';
import LinkElement from './LinkElement.jsx';
import './LinksPage.css';

export default class LinksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="LinksPage">
        <h3>Links</h3>
        <ul>
          <LinkElement
            mainUrl="http://www.defmacro.org/2016/12/22/models.html"
            mainTitle="Mental Models"
            description="How to think"
          />
          <LinkElement
            mainUrl="https://medium.com/@yegg/mental-models-i-find-repeatedly-useful-936f1cc405d"
            mainTitle="Mental Models"
            description="Another perspective"
            mirrorUrl="https://drive.google.com/open?id=1WEJT_QX1ojOGDhw2E-BIoNoUVCII0PCZ"
            mirrorTitle="pdf mirror"
          />
          <LinkElement
            mainUrl="https://gafferongames.com/post/deterministic_lockstep/"
            mainTitle="Deterministic Lockstep"
            description="How lockstep works"
          />
          <LinkElement
            mainUrl="https://www.quora.com/What-is-the-most-sophisticated-piece-of-software-code-ever-written/answer/John-Byrd-2"
            mainTitle="Stuxnet"
            description="Story behind the complex computer worm"
          />
          <LinkElement
            mainUrl="http://www.aaronsw.com/weblog/dalio"
            mainTitle="Lean into the pain"
            description="A blog post by Aaron Swartz"
          />
          <LinkElement
            mainUrl="http://hintjens.com/blog:115"
            mainTitle="A protocol for dying"
            description=""
          />
          <LinkElement
            mainUrl="https://haveibeenpwned.com/"
            mainTitle="haveibeenpwned"
            description="Check if your email is part of a known data breach"
          />
          <LinkElement
            mainUrl="http://bash.org/?top"
            mainTitle="bash.org"
            description="Crude humor"
          />
        </ul>

        <h3>Memorable Moments</h3>
        <ul>
          <li>Pokemon GO launches (2016)</li>
          <li>AlphaGo defeats Lee Sedol in Go (2016)</li>
          <li>2048 goes viral (2014)</li>
          <li>Twitch Plays Pokemon (2014)</li>
          <li>DotA 2 TI3 "Million Dollar Dream Coil" (2013)</li>
          <li>Diablo III launches (2012)</li>
          <li>First time playing Minecraft (2010)</li>
          <li>Usain Bolt's 100M run in olympics (2008)</li>
          <li>Rise of gaming on Facebook like Warbook (2007)</li>
          <li>Pluto removed as a planet (2006)</li>
          <li>Leeroy Jenkins (2006)</li>
          <li>Invited to Gmail (2004)</li>
          <li>Warcraft III launches (2003)</li>
        </ul>

        <h3>Graveyard</h3>
        <ul>
          <li>Myspace</li>
          <li>Xanga</li>
          <li>Digg</li>
          <li><a href="https://gcemetery.co/">Various Google Projects</a></li>
          <li>Survival Project</li>
          <li>Kong Kong Online Racing</li>
          <li>Trickster Online</li>
          <li>AIM</li>

        </ul>
      </div>
    )
  }
}