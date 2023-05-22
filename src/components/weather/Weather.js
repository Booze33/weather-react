import React from 'react';
import PropTypes from 'prop-types';

function Weather(props) {
  const {
    data: {
      name,
      sys,
      weather,
      main,
    },
  } = props;

  return (
    <div className="display">
      <h1>{name}</h1>
      <p>{sys.visibility}</p>
      <p>{weather[0].description}</p>
      <p>
        {main.temp}
        °C
      </p>
    </div>
  );
}

Weather.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Weather;
