import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Provider } from 'react-redux';

const root = document.getElementById('root');



ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
