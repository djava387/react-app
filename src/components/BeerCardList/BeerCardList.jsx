import BeerCard from "../BeerCard/BeerCard";

import "./BeerCardList.scss";

const BeerCardList = ({ beers }) => (
  <div className="beer-list">
    {beers.map((beer) => {
      return <BeerCard key={beer.id} beer={beer} />;
    })}
  </div>
);

export default BeerCardList;
