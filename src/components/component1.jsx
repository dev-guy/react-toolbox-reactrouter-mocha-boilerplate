import React, {Component} from 'react';

class Component1 extends Component{

  constructor(props, context) {
    super(props, context);
    context.router;
  }

  render () {
    return (
      <div>
    <h5>
     Component 1
    </h5>
      </div>
    );
  }
}


Component1.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Component1;
