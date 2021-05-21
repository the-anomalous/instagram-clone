import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom'

import FirebaseContext from './contexts/firebase.context'
import { firebase, FieldValue } from './lib/firebase'

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);