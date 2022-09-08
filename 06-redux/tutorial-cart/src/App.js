import React from 'react';

// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

// redux stuff
import { createStore } from 'redux';
// actions
// reducer
import reducer from './reducer';

//? store - stocke les données, c'est comme un state

//? reducer - fonction qui est utilisée pour mettre à jour le store
//? deux arguments - state, action
//?  state - ancien state/state avant l'update
//? retourner le state mis à jour ou l'ancien

//? store.getState() - récupère le store

//? méthode dispatch - envoie les actions au store
//? actions (objets) - DOIVENT AVOIR LA PROPRIÉTÉ TYPE - ce qu'on veut faire
//? NE MUTE PAS LE STATE - redux est construit sur l'IMMUTABILITÉ (copie)

//* react-redux - Provider - enveloppe l'app, connect - utilisé dans les composants
import { Provider } from 'react-redux';

// store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// console.log(store.getState());

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
