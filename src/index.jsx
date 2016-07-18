import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {AppContainer} from 'react-hot-loader';
import './style';

const div = document.createElement('div');
document.body.appendChild(div);

ReactDOM.render(<AppContainer><App/></AppContainer>, div);

if (module.hot) {
module.hot.accept('./app', () => {
  // If you use Webpack 2 in ES modules mode, you can
  // use <App /> here rather than require() a <App2 />.
  const App2 = require('./app').default;
  ReactDOM.render(
    <AppContainer>
      <App2/>
    </AppContainer>,
    div
  );
});
}

