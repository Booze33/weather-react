import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BiSearch } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { fetchWeatherData } from '../../redux/weather/weatherSlice'; // Import fetchWeatherData instead of selectCity
import './Nav.css';

function Nav() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => setSearchValue(event.target.value);

  const handleSubmit = () => {
    if (searchValue !== '') {
      dispatch(fetchWeatherData(searchValue)); // Dispatch fetchWeatherData with the city name
      navigate('/country/');
      setSearchValue('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <header>
      <h1 className="h1">Weather</h1>
      <nav>
        <input
          type="text"
          id="search"
          value={searchValue}
          placeholder="Enter city name..."
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <div>
          <BiSearch className="icon" onClick={handleSubmit} />
        </div>
        <div>
          <FiSettings className="icon" />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
