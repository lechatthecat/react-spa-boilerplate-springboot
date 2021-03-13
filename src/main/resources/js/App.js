import React, { Component } from 'react';
import '@js/App.scss';
import HelloWorldApp from '@js/component/HelloWorldApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorldApp />
      </div>
    );
  }
}

export default App;
