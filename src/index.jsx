import React from './react-dev/react';
import { render } from './react-dev/react-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => {
        console.log('sasa');
        return {count: state.count + 1};
    });
  }

  render() {
    return [
        <button key="1" onClick={this.handleClick}>Update counter</button>,
        <span key="2">{this.state.count}</span>
    ]
  }
}

render(<App />, document.getElementById('app'));
