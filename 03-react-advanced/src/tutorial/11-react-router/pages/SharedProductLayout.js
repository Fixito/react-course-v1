import React from 'react';
import { Outlet } from 'react-router-dom';

const SharedProducts = () => {
  return (
    <>
      <h2>Products</h2>
      <Outlet />
    </>
  );
};

export default SharedProducts;
