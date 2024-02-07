import { Link, useRouteError } from "react-router-dom";
import { ChevronLeftIcon } from "./ui/Icons";

import "./styles/pages/fallback.scss";

function Fallback(props) {
  let error = useRouteError();

  const message =
    error?.message ||
    props?.message ||
    "Try not. Do or do not. There is no try.";

  return (
    <>
      <ChevronLeftIcon />
      <div className="navigation-container">
        <h2 className="message">{message}</h2>
        <div>
          <Link to={`/`} className="navigation">
            Home
          </Link>
          <Link to="/add" className="navigation">
            Select Capital
          </Link>
        </div>
      </div>
    </>
  );
}
export default Fallback;
