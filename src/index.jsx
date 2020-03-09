import React from './react-dev/react';
import { render } from './react-dev/react-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test',
      count: 0,
    };
  }

  handleCount = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }
  render() {
    const { test, count } = this.state;
    console.log('tests', test);
    return (
      <div>
        <button onClick={this.handleCount}>count</button>
        <div>{count}</div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
