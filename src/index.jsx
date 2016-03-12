'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ToolboxApp from 'react-toolbox/lib/app';
import Button from 'react-toolbox/lib/button';
import { browserHistory, Router, Route, Link } from 'react-router';

import style from './style';

import MainContainer from './components/main';
import Component1 from './components/component1';
import Component2 from './components/component2';

export class App extends Component {

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
      <Router history={browserHistory}>
	<Route path="/" component={MainContainer} >
	  <Route path="/component1" component={Component1} />
	  <Route path="/component2" component={Component2}/>
	</Route>	
      </Router>
    );
  }
}

let div = document.createElement('div');
document.body.appendChild(div);
ReactDOM.render(<App />, div);
