import React, { Component } from 'react'

class TweetBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <textarea />
          <label>What's ?</label>
          <button>tweet</button>
        </form>
      </div>
    );
  }
}

export default TweetBox;
