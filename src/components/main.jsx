import React, {Component} from 'react';
import Button from 'react-toolbox/lib/button';

import Header from './header';
import MainDrawer from './drawer';

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

MainContainer.propTypes = {
    children: React.PropTypes.array
};

MainContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default MainContainer;
