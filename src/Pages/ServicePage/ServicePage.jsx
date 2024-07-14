// Services.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function ServicePage() {
  return (
    <div>
      <h1>Services Page</h1>
      <ul>
        <li><Link to="1">Service 1</Link></li>
        <li><Link to="2">Service 2</Link></li>
      </ul>
      <Outlet />
    </div>
  );
}

export default ServicePage;