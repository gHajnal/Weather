import { useState } from "react";

import SearchCapital from "./SearchCapital";

import { ChevronDownIcon, ChevronLeftIcon } from "../ui/Icons";

import "../styles/pages/save_capital.scss";

function Capital() {
  const [input, setInput] = useState("");

  const changeHandler = (inputValue) => {
    setInput(inputValue);
  };

  return (
    <>
      <ChevronLeftIcon />
      <div className="capital__input-area">
        <input
          className="capital__input-field"
          autoFocus={true}
          placeholder="Type to search..."
          onChange={(e) => changeHandler(e.target.value)}
        ></input>
        <span>
          <ChevronDownIcon />
        </span>
      </div>
      <SearchCapital searchTerm={input} />
    </>
  );
}
export default Capital;
