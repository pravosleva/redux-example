import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import AsyncApp from './components/AsyncApp';
import stt from './reducers';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
  stt,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const rootEl = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <AsyncApp
      obj={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      onUpdateList={(ar) => store.dispatch({ type: 'UPDATE_LIST', list: ar })}
    />,
    rootEl,
  );
};
render();
store.subscribe(render);

// пример подписки на изменение store:
//store.subscribe(() => {console.log(`Store has updated! New store: ${JSON.stringify(store.getState())}`)});
