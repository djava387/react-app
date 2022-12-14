import { useState, useEffect } from "react";
import BeerCardList from "./components/BeerCardList/BeerCardList";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

const App = () => {
  // Use state hooks to manage state
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [highAlcohol, setHighAlcohol] = useState(false);
  const [classicRanger, setClassicRanger] = useState(false);
  const [highAcidity, setHighAcidity] = useState(false);
  useEffect(() => {
    let url = "https://api.punkapi.com/v2/beers?";

    if (highAlcohol) {
      url += "&abv_gt=6";
    }

    if (classicRanger) {
      url += "&brewed_before=01-2010";
    }

    // Fetch beers from the API
    fetch(url)
      .then((response) => response.json())
      .then((beers) => {
        setBeers(beers);
      });
  }, [highAlcohol, classicRanger]);

  // Filter beers based on search term and high acidity checkbox
  const filteredBeers = beers.filter((beer) => {
    const matchesSearchTerm = beer.name.toLowerCase().includes(searchTerm);
    const matchesHighAcidity = highAcidity ? beer.ph < 4 : true;
    return matchesSearchTerm && matchesHighAcidity;
  });

  // Event handler for search
  const handleSearch = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchTerm(searchFieldString);
  };
  // console.log(handleSearch);
  // Event handler for high alcohol filter
  const handleHighAlcohol = () => {
    setHighAlcohol(!highAlcohol);
  };

  // Event handler for classic ranger filter
  const handleClassicRanger = () => {
    setClassicRanger(!classicRanger);
  };

  // Event handler for high acidity filter
  const handleHighAcidity = () => {
    setHighAcidity(!highAcidity);
  };

  return (
    <div className="App">
      <h1 classsName="app-title">🍺 Brews & Giggles </h1>
      {/* Render Navbar component and pass down props  */}
      <NavBar
        searchTerm={searchTerm}
        highAlcohol={highAlcohol}
        classicRanger={classicRanger}
        highAcidity={highAcidity}
        onChangeHandler={handleSearch}
        onHighAlcoholHandler={handleHighAlcohol}
        onClassicRangerHandler={handleClassicRanger}
        onHighAcidityHandler={handleHighAcidity}
      />
      <BeerCardList beers={filteredBeers} />
    </div>
  );
};
export default App;
