import React, {Component} from 'react';
import Drawer from 'react-toolbox/lib/drawer';
import Button from 'react-toolbox/lib/button';


import Navigation from 'react-toolbox/lib/navigation';

class MainDrawer extends Component {

  constructor(props, context) { 
    super(props, context);
    context.router;
    console.log(context);
    this.handleRoute = this.handleRoute.bind(this);
    this.actions =  [
      { name: 'home', label: 'Home', 
	raised: true, accent: true, 
	icon: 'home', onClick:this.handleRoute},
      { name: 'component1', label: 'Component1', 
	raised: true, icon: 'save', 
	onClick: this.handleRoute},
      { name: 'component2', label: 'Component2', raised: true, icon: 'people', 
	onClick: this.handleRoute},
    ];
    this.state = {active: false};
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({active: !this.state.active});
  }

  handleRoute(options, callback) {
    if (options.target.name == 'home'){
      this.context.router.push('/');
    }else if (options.target.name == 'component1'){
      this.context.router.push('/component1');
    }else if (options.target.name == 'component2'){
      this.context.router.push('/component2');
    }
  }
  
  render () {
    return (
      <div>
	<Button icon='menu' raised accent onClick={this.handleToggle} />
	<Drawer active={this.state.active} onOverlayClick={this.handleToggle}>
	<Navigation type='horizontal' actions={this.actions} />
	</Drawer>
      </div>
    );
  }
}

MainDrawer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default MainDrawer;
