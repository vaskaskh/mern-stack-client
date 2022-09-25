import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import { Provider} from 'react-redux';
import store from './redux/store';

import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'


let persistor = persistStore(store)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </PersistGate>
  </Provider>
);



