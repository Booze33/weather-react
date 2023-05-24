import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchCities } from '../../redux/country/countrySlice';
import './Weather.css';

export function convert(kelvin) {
  const cel = kelvin - 273;

  return cel;
}

function Weather() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error}
        . Try again.
      </p>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <section className="section" data-testid="section">
      <button type="button" className="button-2">
        <NavLink to="/" className="navlink-2">Back</NavLink>
      </button>
      <h2 className="h2-2">The Weather Today Is..</h2>
      <h3 className="h3">{data.condition.toUpperCase()}</h3>
      <div className="div-p">
        <p className="p-temp">Temperature in Kelvin:</p>
        <p className="p-deg">
          {data.temperature}
          °k
        </p>
      </div>
      <div className="div-p">
        <p className="p-temp">Temperature In Celsius:</p>
        <p className="p-deg">
          {Math.floor(convert(data.temperature))}
          °c
        </p>
      </div>
    </section>
  );
}

export default Weather;
