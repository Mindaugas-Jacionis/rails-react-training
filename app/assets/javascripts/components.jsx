const { Component } = React;

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <h1>Hello component world!</h1>
    );
  }
}

// let documentReady = () => {
//   ReactDOM.render(
//     <Main />,
//     document.getElementById('app')
//   );
// }
//
// $(documentReady);
