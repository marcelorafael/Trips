import React from 'react';
<<<<<<< HEAD
import { Router } from 'react-router-dom';
=======
import { BrowserRouter } from 'react-router-dom';
>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83
import { Provider } from 'react-redux';

import Routes from './routes';
import Header from './components/Header';

<<<<<<< HEAD
import history from './services/history';

=======
>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83
import store from './store';

export default function App() {
 return (
   <Provider store={store}>
<<<<<<< HEAD
    <Router history={history}>
      <Header/>
      <Routes/>
    </Router>
   </Provider>
 );
}
=======
    <BrowserRouter>
      <Header/>
      <Routes/>
    </BrowserRouter>
   </Provider>
 );
}
>>>>>>> 9a1d5ed4baca79792e375bc03d517876e14fcc83
