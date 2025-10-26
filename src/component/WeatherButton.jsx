import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,selectedCity,handleCityChange}) => {
  return (
    <div className="button-box">
       <Button className='current_btn'
        variant={`${selectedCity == null ? "primary" : "warning"}`}
        onClick={() => handleCityChange("current")}
      >
        Current Location
      </Button>
     <div  className="city-btn"> {cities.map((city) => (
        <Button
          variant={`${selectedCity == city ? "primary" : "warning"}`}
          onClick={() => handleCityChange(city)}
        >
          {city}
        </Button>
     
      ))}
      </div>
    </div>
  
  )
}

export default WeatherButton
