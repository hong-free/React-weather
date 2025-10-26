import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import { ClipLoader } from "react-spinners";



//1.앱이 실행되자마자 현재위치기반에 날씨가 보인다.
//2.날씨정보에는 도시, 섭씨, 화씨, 날씨상태정보가 들어간다.
//3.5개의 버튼이 있다.(1개는 현재위치,4개는 다른 도시)
//4.도시버튼을 클릭할때마다 도시별 날씨가 보인다.
//5.현재 위치 기반 날씨버트는) 글릭하면 다시 현재위치 기반 날씨가 나온다.
//6.데이터를 들고오는동안 로딩 스피너가 돈다.

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);
   const [apiError, setAPIError] = useState("");

  const cities = ["paris", "new york", "tokyo", "seoul"];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };
  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ba29d4cae2644480c786cd8921c029c1&units=metric`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  };
  const getWeatherByCity = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ba29d4cae2644480c786cd8921c029c1&units=metric`;
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setWeather(data);
      setLoading(false);
    } catch {
      setAPIError(err.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (city == null) {
      setLoading(true);
      getCurrentLocation();
    } else {
       setLoading(true);
      getWeatherByCity();
    }
  }, [city]);

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };
  return (
    <div>
      {loading ? (
        <div className="container">
          {" "}
          <ClipLoader
            color="#f88c6b"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : !apiError ? (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            handleCityChange={handleCityChange}
            selectedCity={city}
          />
        </div>
      ):(  apiError
        
      )}
    </div>
  );
}

export default App;
