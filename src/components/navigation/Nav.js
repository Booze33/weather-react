import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import './Nav.css';

function Nav() {
  return (
    <header>
      <h1 className="h1">Weather</h1>
      <nav>
        <div>
          <BiSearch className="icon" />
        </div>
        <div>
          <FiSettings className="icon" />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
