import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { fetchWeatherData } from '../../redux/weatherSlice';

function Weather() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.weather);
  const [locationName, setLocationName] = useState('');

  const handleInputChange = (event) => {
    setLocationName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchWeatherData(locationName));
  };

  useEffect(() => {
    dispatch(fetchWeatherData('London'));
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error: Failed to get data. Try again
      </p>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <section>
      <form className="form">
        Enter Location
        <input type="text" value={locationName} onChange={handleInputChange} />
        <button type="submit" onClick={handleSubmit}>Search</button>
      </form>
      <div className="display">
        <h1>{data.name}</h1>
        <p>{data.sys.country}</p>
        <p>{data.weather[0].description}</p>
        <p>
          {data.main.temp}
          °C
        </p>
      </div>
    </section>
  );
}

export default Weather;
