import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { capitalActions } from "./store";

import { MinusIcon, PlusIcon } from "./ui/Icons";

import "./styles/pages/home.scss";

function Home() {
  const dispatch = useDispatch();
  const savedCapitals = useSelector((state) => state.capital.savedCapitalNames);

  const isPlaceholder =
    savedCapitals != null && Object.keys(savedCapitals).length === 0;

  const handleRemove = (id) => {
    dispatch(capitalActions.removeCapital(id));
  };

  return (
    <>
      <div className="home__placeholder--backIcon"></div>
      {isPlaceholder && (
        <div className="home__placeholder">
          ... saved capitals will appear here ...
        </div>
      )}
      {!isPlaceholder && (
        <div className="home__capitals-list">
          <ul>
            {savedCapitals != null &&
              Object.entries(savedCapitals).map((capitalObject) => {
                return (
                  <li key={capitalObject[1].id}>
                    <div className="home__capital-row">
                      <span className="home__capital">
                        <Link to={`/weather/${capitalObject[1].name}`}>
                          {capitalObject[1].name}
                        </Link>
                      </span>
                      <span>
                        <button
                          className="home__remove--cta"
                          type="button"
                          onClick={() => handleRemove(capitalObject[1].id)}
                        >
                          <MinusIcon />
                        </button>
                      </span>
                    </div>
                  </li>
                );
              })}{" "}
          </ul>
        </div>
      )}
      <div className="home__add-capitals">
        <Link to="/add">
          <PlusIcon />
        </Link>
      </div>
    </>
  );
}
export default Home;
