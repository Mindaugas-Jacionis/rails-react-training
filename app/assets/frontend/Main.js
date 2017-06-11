import React, { Component } from 'react';
import { TweetBox } from './components';

class Main extends Component {
  render() {
    return(
      <div className="container">
        <TweetBox />
      </div>
    );
  }
}

export default Main;
