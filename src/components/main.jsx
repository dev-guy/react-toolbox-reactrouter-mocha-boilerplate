import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-toolbox/lib/button';
import Navigation from 'react-toolbox/lib/navigation';

import { browserHistory, Router, Route, Link } from 'react-router';

import Header from './header';
import MainDrawer from './drawer';
import MainNavigation from './navigation';

import style from './style';

class DashBoard extends Component {
  render() {
    return(
      <div> <h3> Dashboard content </h3></div>
    );
  }
}

class MainContainer extends Component {

  constructor(props, context) { 
    super(props, context);
    context.router;
  }
  
  render(){
	
	return (		
		<div>
		  <Header>
		    <div> some content here</div>
		  </Header>
		  <MainDrawer />
		  <section className={style.content}>
		    {this.props.children || <DashBoard />}
		  </section>
		  <Button label='Button' />
		</div>
	);
    }
}


MainContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default MainContainer;
