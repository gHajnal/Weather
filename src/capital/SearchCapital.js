import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { capitalActions } from "../store/index";
import useWeather from "../hooks/useWeather";

import "../styles/pages/save_capital.scss";

function SearchCapital(props) {
  const [selectedCapital, setSelectedCapital] = useState();
  useWeather(selectedCapital);

  const feed = useSelector((state) => state.capital.feed);

  const filteredCapitals = useSelector(
    (state) => state.capital.filteredCapitals
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCapital === undefined) {
      return;
    }

    filteredCapitals.forEach((capitalObject) => {
      if (capitalObject.name === selectedCapital) {
        dispatch(capitalActions.storeCapital(capitalObject));
      }
    });
  }, [selectedCapital, filteredCapitals]);

  useEffect(() => {
    if (props.searchTerm.length > 0) {
      const search = () => {
        let resultCapitals = [];

        feed.forEach((capitalObject, i) => {
          if (resultCapitals.length < 8) {
            if (
              capitalObject.show &&
              capitalObject.name
                .toLowerCase()
                .includes(props.searchTerm.toLowerCase())
            ) {
              resultCapitals.push(capitalObject);
            }
            return resultCapitals;
          }
          return;
        });
        dispatch(capitalActions.storeFilteredCapitals(resultCapitals));
      };

      search();
    }
  }, [props.searchTerm, feed, dispatch]);

  const additionHandler = (e) => {
    setSelectedCapital(e.target.outerText);
  };

  const isResult = filteredCapitals.length > 0 && props.searchTerm.length > 0;

  const result = (
    <ul className="capitals__filtered-list colorize">
      {filteredCapitals.map((capitalObject) => (
        <li
          className="capitals__filtered-list--item"
          key={capitalObject.id}
          onClick={additionHandler}
        >
          {capitalObject.name}
        </li>
      ))}
    </ul>
  );

  const noResult =
    props.searchTerm.length > 0 && filteredCapitals.length === 0 ? (
      <div className="capitals__filtered-list colorize">No result</div>
    ) : (
      ""
    );

  return <>{isResult ? result : noResult}</>;
}
export default SearchCapital;
