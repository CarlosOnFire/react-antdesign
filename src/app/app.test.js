import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from './app.container';
import store from '../redux/createStore';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});