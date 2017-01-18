import React from 'react';
import $ from 'jquery';
import {Button, Row, Col, Grid} from 'react-bootstrap';


export default class Signin extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <a href='auth/google'>Sign In with Google</a>
      </div>
    )
  }
}

Signin.contextTypes = {
  router: React.PropTypes.object.isRequired
}