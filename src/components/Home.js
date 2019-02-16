import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import {Header, Segment, Divider, Icon, Button, Container, Dropdown} from "semantic-ui-react";

class Home extends React.Component {
  render() {
    let counter = this.state.counter;
    console.log(this.state)
    return (
      <div>
        Jprime first test
      </div>
    )
  }
}


export default Home;
