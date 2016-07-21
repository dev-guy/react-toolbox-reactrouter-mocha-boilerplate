import React, {Component} from 'react';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';

class LoginForm extends Component {

  constructor(props, context){
    super(props, context);
    context.router;
    this.state = { userName: '', password: ''};
    this.submitForm = this.submitForm.bind(this);
  }
  
  handleChange(name, value){
    let d = this.state[name]= value;
  };

  submitForm (){
    console.log('submit form');
  }
  
  render (){
    return (
      <div className='loginForm'>
    <Input type='text'
           label='Nombre'
           ref='userName'
           onChange={this.handleChange.bind(this, 'userName')}
           maxLength={16} />
      <Input ref='password'
         label='Password'
         onChange={this.handleChange.bind(this, 'password')}
         type="password"
         name="password"/>
    <Button ref='loginButton' label='Ingresar' onClick={this.submitForm}/>
      </div>);
  }
}

LoginForm.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default LoginForm;
