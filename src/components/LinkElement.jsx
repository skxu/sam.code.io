import React, { Component } from 'react';

export default class LinkElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <li>
        <span>
          <a href={this.props.mainUrl}>
            {this.props.mainTitle}
          </a>
        </span>
        <span> &middot; </span>
        <span>{this.props.description}</span>
        {this.props.mirrorUrl &&
          <React.Fragment>
            <span> &middot; </span>
            <span>
              <a href={this.props.mirrorUrl}>
                {this.props.mirrorTitle}
              </a>
            </span>    
          </React.Fragment>
        }
      </li>
    )
  }
}