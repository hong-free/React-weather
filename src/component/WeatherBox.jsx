import React from 'react'

const WeatherBox = ({weather}) => {
  console.log(weather)

  return (
    <div className="weather-box">
      <h1>{weather?.name}</h1>
      <h2>섭씨{weather?.main.temp}℃/ 화씨{(((weather?.main.temp)*9/5)+32).toFixed(1)} °F</h2>
      <h3>{weather?.weather[0].description}</h3>
        <h2>최고온도 {weather?.main.temp_max} /최저온도 {weather?.main.temp_min}</h2>
    </div>
  )
}

export default WeatherBox
