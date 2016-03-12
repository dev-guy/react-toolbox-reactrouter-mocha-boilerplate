/*
 Author: Demian Florentin <demian@sinergetica.com
 */

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils,{ Simulate }  from 'react-addons-test-utils';
import { render } from 'react-dom';
import chai from 'chai';
import createHistory from 'history/lib/createMemoryHistory';

import {browserHistory, Router, Route, Link } from 'react-router';

import LoginForm from '../src/components/login';
const expect = chai.expect;

let loginForm;
let node;

//TODO: make react-router warnings dissapear
const loginFormElem = (<Router history={createHistory('/login')} >
		     <Route path="/login" component={LoginForm} />
		     </Router>);

describe('Given a login form', () => {
    
    beforeEach( () => {
	loginForm = TestUtils.renderIntoDocument(loginFormElem);
    });
    
    it('should render a login form without problems', () => {
	//should exist first
	expect(loginForm).to.exists;
	let userNameLabel = TestUtils.scryRenderedDOMComponentsWithTag(loginForm, 'label')[0];
	expect(userNameLabel.textContent).to.equal('Nombre');
	let passwordLabel = TestUtils.scryRenderedDOMComponentsWithTag(loginForm, 'label')[1];
	expect(passwordLabel.textContent).to.equal('Password');
    });

    it('should have a username input', () => {
	let userName = ReactDOM.findDOMNode(loginForm, loginForm.refs.userName);
	expect(TestUtils.isDOMComponent(userName)).to.be.true;
    });

    it('should have a password input', () => {
	let password = ReactDOM.findDOMNode(loginForm, loginForm.refs.password);
	expect(TestUtils.isDOMComponent(password)).to.be.true;

    });
    
    it('should submit the login form', (done) => {
	const button = ReactDOM.findDOMNode(loginForm, loginForm.refs.loginButton);
	//button should exist
	expect(button).to.exist;
	//fill input values
	let userName = ReactDOM.findDOMNode(loginForm, loginForm.refs.userName);
	let password = ReactDOM.findDOMNode(loginForm, loginForm.refs.password);
	userName.value = 'UserName';
	Simulate.change(userName);
	password.value = 'testpassword';
	Simulate.change(password);
	//submit
	Simulate.click(button);

	done();
    });
});
