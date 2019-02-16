import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/Home';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    console.log("This is the process.env", process.env.PUBLIC_URL)
    // debugger
    return (
      <div>
        //<Route exact path={`/`} component={Home} />
      </div>
    );
  }
}

export default App;
