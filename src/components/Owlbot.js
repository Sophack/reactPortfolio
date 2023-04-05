import React from 'react';
import Owlbot from 'owlbot-js';

this.state = {
    owlbotClient: Owlbot('2dfbb83f7a862e3356fa73cd393010df999b633b')
  };

  handleSearch = (word) => {
    this.state.owlbotClient.define(word).then((result) => {
      console.log(result);
    });
  }
  

export default function Owlbot() {
  return (
    <>
       <input type="text" onChange={(e) => this.setState({word: e.target.value})} />
      <button onClick={() => this.handleSearch(this.state.word)}>Search</button>

    </>
  )
}
