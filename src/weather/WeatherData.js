import { useEffect, useState } from "react";
import { DateTime } from "luxon";

import CurrentTime from "./CurrentTime";
import { ThermometerIcon, SunsetIcon, SunriseIcon } from "../ui/Icons";

import "../styles/pages/weather.scss";

function WeatherData(props) {
  const [weatherData, setWeatherData] = useState({});
  const [unit, setUnit] = useState("metric");

  useEffect(() => {
    if (props.rawData === undefined) {
      return;
    }
    const sunriseTime = DateTime.fromSeconds(props.rawData?.sys?.sunrise)
      .toUTC(props.rawData?.timezone / 60)
      .toFormat("HH:mm");

    const sunsetTime = DateTime.fromSeconds(props.rawData?.sys?.sunset)
      .toUTC(props.rawData?.timezone / 60)
      .toFormat("HH:mm");

    let weatherIcon;

    const isIconExist = props.rawData?.weather[0]?.icon !== undefined;

    if (isIconExist) {
      weatherIcon =
        `https://openweathermap.org/img/wn/${props.rawData?.weather[0]?.icon}@2x.png`.toString();
    }

    const temp = Math.trunc(props.rawData?.main?.temp);

    setWeatherData({
      capital: props.rawData?.name,
      weatherIcon: weatherIcon,
      weatherDescription: props.rawData?.weather[0]?.description,
      temp: unit === "imperial" ? Math.floor(temp * 1.8 + 32) : temp,
      temp_m: unit === "imperial" ? "°F" : "°C",
      sunriseTime: sunriseTime,
      sunsetTime: sunsetTime,
      timezone: props.rawData?.timezone,
      birthOfData: props.rawData?.dt,
    });
  }, [props.rawData, unit]);

  const unitHandler = () => {
    setUnit((prevUnit) => {
      if (prevUnit === "imperial") {
        return "metric";
      } else {
        return "imperial";
      }
    });
  };

  return (
    <>
      <CurrentTime offset={props.rawData?.timezone} />
      <div className="weather__main-info">
        <div className="weather__capital">{weatherData.capital}</div>
        <div className="weather__weather-icon">
          <img
            alt={weatherData.weatherDescription}
            src={weatherData.weatherIcon}
          />
        </div>
        <div className="weather__description">
          {weatherData.weatherDescription}
        </div>
      </div>

      <div className="weather__details">
        <div className="weather__detail">
          <span className="weather__detail-icon">
            <ThermometerIcon />
          </span>
          <button type="button" onClick={unitHandler} className="unitHandler">
            <span className="weather__detail-data">
              {weatherData.temp} {weatherData.temp_m}
            </span>
          </button>
        </div>
        <div className="weather__detail">
          <span className="weather__detail-icon">
            <SunriseIcon />
          </span>
          <span className="weather__detail-data">
            {weatherData.sunriseTime}
          </span>
        </div>
        <div className="weather__detail">
          <span className="weather__detail-icon">
            <SunsetIcon />
          </span>
          <span className="weather__detail-data">{weatherData.sunsetTime}</span>
        </div>
      </div>
    </>
  );
}
export default WeatherData;
