import React, { Component } from 'react';
import quotes from '../quotes';
import './RandomPage.css';
import refresh from '../refresh.svg';

export default class RandomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
      currentQuoteIndex: null
    }
    this.getRandomQuote = this.getRandomQuote.bind(this);
  }
  
  getRandomQuote() {
    let randomIndex = Math.floor(Math.random()*quotes.length);
    
    while (randomIndex === this.state.currentQuoteIndex) {
      // prevent duplicates
      randomIndex = Math.floor(Math.random()*quotes.length);
    }
    
    this.setState({
      quote: quotes[randomIndex].quote,
      author: quotes[randomIndex].author,
      currentQuoteIndex: randomIndex
    });
  }

  componentDidMount() {
    this.getRandomQuote();
  }

  render() {
    return (
      <div className="RandomPage">
        <h3>
          Random Quote 
          <a onClick={this.getRandomQuote} className="refreshContainer"><img src={refresh} className="refresh"/></a>
        </h3>
        <div className="quote">{this.state.quote}</div>
        <div className="author">{this.state.author}</div>
      </div>
    )
  }
}