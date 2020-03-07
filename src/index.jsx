import React from './react-dev/react';
import { render } from './react-dev/react-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>hello sss</div>
    );
  }
}

render(<App />, document.getElementById('app'));
