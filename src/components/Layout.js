import React from 'react'
import { Link } from 'react-router-dom'

const Layout = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/hello'>Hello</Link></li>
      </ul>
    </nav>
  </header>
);

export default Layout;