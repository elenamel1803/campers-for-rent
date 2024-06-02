import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { App } from 'components/App';
import GlobalStyles from 'GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/campers-for-rent">
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
