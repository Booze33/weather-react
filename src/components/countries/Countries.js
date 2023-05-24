import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { GiWorld } from 'react-icons/gi';
import { fetchCities } from '../../redux/country/countrySlice';
import { fetchWeatherData } from '../../redux/weather/weatherSlice';
import './Countries.css';

function Countries() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.city);

  useEffect(() => {
    if (cities.status === 'idle') {
      dispatch(fetchCities());
    }
  }, [cities.status, dispatch]);

  const handleCityClick = (cityName) => {
    dispatch(fetchWeatherData(cityName));
  };

  return (
    <div>
      {cities.status === 'loading' && <div>Loading...</div>}
      {cities.status === 'failed' && <div>{cities.error}</div>}
      {cities.status === 'succeeded' && (
        <div className="big-container">
          <h1 className="h1-2">Your Cities</h1>
          <div className="container">
            {cities.data && cities.data.length > 0 ? (
              cities.data.map((city) => (
                <div key={city} className="city-container">
                  <GiWorld className="galaxy" />
                  <h2 className="h2">{city}</h2>
                  <button type="button" className="button-1" onClick={() => handleCityClick(city)}>
                    <NavLink to="/country/" className="navlink">Check Weather</NavLink>
                  </button>
                </div>
              ))
            ) : (
              <p>No Cities on Your List</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Countries;
