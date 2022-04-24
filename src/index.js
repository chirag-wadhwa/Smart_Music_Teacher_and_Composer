import React, { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import store from './store/index';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import './index.css';
import App from './App';
// import rootReducer from './reducers/root-reducer';

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk),
// );

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </StrictMode>
);