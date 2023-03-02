import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Suspense fallback="loading...">
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>
);
