import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DateTime } from "luxon";

import useFetchWeather from "./useFetchWeather";

function useWeather(props) {
  const capitalName = props;

  const [isUpdateRequired, setIsUpdateRequired] = useState(false);
  const [capitalToFetch, setCapitalToFetch] = useState();

  useFetchWeather(capitalToFetch);

  const weatherData = useSelector((state) =>
    state.weather.data.find(
      (weatherObject) => weatherObject.name === capitalName
    )
  );

  useEffect(() => {
    if (capitalName === undefined) {
      return;
    }

    let elapsedMinutes;
    if (weatherData?.name === capitalName) {
      elapsedMinutes = Math.abs(
        DateTime.fromSeconds(weatherData?.dt).diffNow(["minutes"]).toObject()
          .minutes
      );
    }

    setIsUpdateRequired(elapsedMinutes > 20 || weatherData === undefined);
  }, [capitalName, weatherData?.name]);

  useEffect(() => {
    if (isUpdateRequired) {
      setCapitalToFetch(capitalName);
    }
  }, [capitalName, isUpdateRequired]);
  return weatherData;
}

export default useWeather;
