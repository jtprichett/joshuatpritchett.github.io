import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/Home';

class App extends Component {
  render() {
    console.log("This is the process.env", process.env.PUBLIC_URL)
    return (
      <Router>
        <div>
          <Route exact path={`/`} component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
