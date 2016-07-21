import React, {Component} from 'react';
import { hashHistory, Router, Route } from 'react-router';

import MainContainer from './components/main';
import Component1 from './components/component1';
import Component2 from './components/component2';

export default class App extends Component {

    constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    }
    
    onChange() {
    }
    
    componentDidMount() {

    }

  render(){
    return (
    <Router history={hashHistory}>
    <Route path="/" component={MainContainer} >
      <Route path="/component1" component={Component1} />
      <Route path="/component2" component={Component2}/>
    </Route>    
    </Router>
    );
  }
}

