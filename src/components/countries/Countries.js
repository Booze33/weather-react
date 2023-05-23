import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchCities } from '../../redux/country/countrySlice';

function Countries() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.city);

  useEffect(() => {
    if (cities.status === 'idle') {
      dispatch(fetchCities());
    }
  }, [cities.status, dispatch]);

  return (
    <div>
      {cities.status === 'loading' && <div>Loading...</div>}
      {cities.status === 'failed' && <div>{cities.error}</div>}
      {cities.status === 'succeeded' && (
        <div>
          <h1>Your Cities</h1>
          {cities.data && cities.data.length > 0 ? (
            cities.data.map((city) => (
              <div key={city}>
                <h2>{city}</h2>
                <button type="button">
                  <NavLink to="/country/">Check Weather</NavLink>
                </button>
              </div>
            ))
          ) : (
            <p>No Cities on Your List</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Countries;
