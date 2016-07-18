import React, {Component} from 'react';

class Component2 extends Component{
  
  constructor(props, context) {
    super(props, context);
    context.router;
    }

    render () {
    return (
        <div>
        <h5>Component 2</h5>        
        </div>
    );
  }
}

Component2.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Component2;
