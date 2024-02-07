import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useWeather from "../hooks/useWeather";
import WeatherData from "./WeatherData";
import Fallback from "../Fallback";
import { ChevronLeftIcon } from "../ui/Icons";
import Spinner from "./../ui/Spinner";

function Weather() {
  const capitalName = useParams().capitalName;
  const weatherData = useWeather(capitalName);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    if (weatherData === undefined) {
      setisLoading(true);
    } else {
      setisLoading(false);
    }
  }, [isLoading, weatherData]);

  return (
    <>
      {weatherData === undefined && isLoading && <Spinner />}
      {!isLoading ? (
        <>
          <ChevronLeftIcon />
          <WeatherData rawData={weatherData}></WeatherData>
        </>
      ) : (
        <Fallback
          message={"Something went wrong, please select another page!"}
        />
      )}
    </>
  );
}

export default Weather;
