import React from 'react';
import { useState } from 'react';
// react router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import Error from './Error';
import Products from './Products';
import SingleProduct from './SingleProduct';
import SharedLayout from './SharedLayout';
import Login from './Login';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import SharedProductLayout from './SharedProductLayout';

//* react router est le package le plus populaire pour faire des liens entre les pages mais n'est pas intégré dans React, c'est une librairie externe
//? normalement, on wrap notre appli en entier (<App />) avec <Router /> mais comme on a plusieurs fichiers on le fera ici
const ReactRouterSetup = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        {/* on aura des composants qui vont servir de pages */}
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>
          {/* "*" match n'importe quelle route mais est la moins spécifique */}
          <Route path='*' element={<Error />} />
          <Route path='/login' element={<Login setUser={setUser} />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default ReactRouterSetup;
