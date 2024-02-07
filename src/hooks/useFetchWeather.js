import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions, weatherActions } from "../store";

const API_KEY = process.env.REACT_APP_API_KEY;
const baseUrl = `https://api.openweathermap.org/data/2.5/weather`;
if (API_KEY === "") {
  throw Error("Missing API KEY!");
}

const errorObjInitials = {
  isE: false,
  eCode: 0,
  eText: "",
};

function useFetchWeather(capitalName) {
  const savedCapitals = useSelector((state) => state.capital.savedCapitalNames);

  const [errorObj, setErrorObj] = useState(errorObjInitials);

  const dispatch = useDispatch();

  useEffect(() => {
    let resultData;

    const isSaved = savedCapitals.some(
      (savedCapital) => savedCapital.name === capitalName
    );

    if (capitalName === undefined || !isSaved) {
      return;
    }

    const fetchData = async () => {
      setErrorObj(errorObjInitials);

      try {
        const response = await fetch(
          `${baseUrl}?q=${capitalName}&appid=${API_KEY}&units=metric`
        );

        resultData = await response.json();

        if (response.ok) {
          dispatch(weatherActions.saveWeather(resultData));
          dispatch(modalActions.showSuccess(`${capitalName} is saved!`));
        }

        if (!response.ok) {
          setErrorObj({
            isE: true,
            eCode: response.status,
            eText: response.statusText,
          });
        }
      } catch (error) {
        setErrorObj({
          isE: true,
          eCode: 1,
          eText: error,
        });
      } finally {
        if (!errorObj.isE) {
          setErrorObj(errorObjInitials);
          return;
        }
        if (errorObj.eCode === "404") {
          const firstCharacter = errorObj?.eText.charAt(0);
          const messageAsSentence = errorObj?.eText.replace(
            firstCharacter,
            firstCharacter.toUpperCase()
          );
          dispatch(modalActions.showFailure(messageAsSentence));
        } else {
          dispatch(
            modalActions.showFailure(
              `Network error. Please check your connection!`
            )
          );
        }
        setErrorObj(errorObjInitials);
      }
    };

    fetchData();
  }, [capitalName]);
}
export default useFetchWeather;
