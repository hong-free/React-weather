import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,selectedCity,handleCityChange}) => {
  return (
    <div className="button-box">
       <Button
        variant={`${selectedCity == null ? "primary" : "warning"}`}
        onClick={() => handleCityChange("current")}
      >
        Current Location
      </Button>

      {cities.map((city) => (
        <Button
          variant={`${selectedCity == city ? "primary" : "warning"}`}
          onClick={() => handleCityChange(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  
  )
}

export default WeatherButton
