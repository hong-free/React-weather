import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div className='button-box'>
      <Button variant="warning">Current Location</Button>
      <Button variant="warning">Paris</Button>
      <Button variant="warning">New York</Button>
      <Button variant="warning">Italia</Button>
    </div>
  )
}

export default WeatherButton
