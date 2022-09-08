import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      {/* la fonction est propre a react-router-dom */}
      {/* <NavLink
        to='/'
        style={({ isActive }) => {
          return { color: isActive ? 'red' : 'grey' };
        }}>
        Home
      </NavLink> */}
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}>
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}>
        About
      </NavLink>
      <NavLink
        to='/products'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}>
        Products
      </NavLink>
      <NavLink
        to='/login'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}>
        Login
      </NavLink>
    </nav>
  );
};

export default Navbar;
