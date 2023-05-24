import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BiSearch } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { setFilter } from '../../redux/country/countrySlice';
import './Nav.css';

function Nav() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilter(''));
  }, [dispatch]);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <header>
      <h1 className="h1">Weather</h1>
      <nav>
        <input
          type="text"
          placeholder="Search for country"
          onChange={handleFilterChange}
        />
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
