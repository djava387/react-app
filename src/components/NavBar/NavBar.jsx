import React from "react";
import SearchBeer from "../SearchBeer/SearchBeer";

import "./NavBar.scss";

const NavBar = (props) => {
  // Destructure props
  const {
    searchTerm,
    highAlcohol,
    classicRanger,
    highAcidity,
    onChangeHandler,
    onHighAlcoholHandler,
    onClassicRangerHandler,
    onHighAcidityHandler,
  } = props;

  return (
    <div className="navbar">
      <SearchBeer
        className="beers-search-box"
        onChangeHandler={onChangeHandler}
        placeholder="Search..."
        searchTerm={searchTerm}
      />
      High Alcohol (ABV greater than 6%){" "}
      <input
        type="checkbox"
        onChange={onHighAlcoholHandler}
        checked={highAlcohol}
      />
      Classic Range (Was first brewed before 2010){" "}
      <input
        type="checkbox"
        onChange={onClassicRangerHandler}
        checked={classicRanger}
      />
      High Acidity (pH lower than 4){" "}
      <input
        type="checkbox"
        onChange={onHighAcidityHandler}
        checked={highAcidity}
      />
    </div>
  );
};

export default NavBar;
