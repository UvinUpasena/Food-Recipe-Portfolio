import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';

const Layout = () => {
  return (
    <div>
      <Navbar/>  {/* Navbar always visible */}
      <Outlet />  {/* This renders the current route's component */}
    </div>
  );
};

export default Layout;
