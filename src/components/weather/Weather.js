import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchWeatherData } from '../../redux/weather/weatherSlice';

function convert(kelvin) {
  const cel = kelvin - 273;

  return cel;
}

console.log(convert(283));

function Weather() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeatherData('London'));
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
    <section>
      <h2>Weather</h2>
      <p>Condition: {data.condition}</p>
      <p>Temperature In Kelvin: {data.temperature}°k</p>
      <p>Temperature in Celsius: {Math.floor(convert(data.temperature))}°C</p>
      <button type="button">
        <NavLink to="/">Back</NavLink>
      </button>
    </section>
  );
}

export default Weather;
