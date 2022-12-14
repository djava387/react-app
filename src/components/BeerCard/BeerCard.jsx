import "./BeerCard.scss";
import RatingWidget from "../RatingWidget/RatingWidget";

const BeerCard = ({ beer }) => {
  const { image_url, name, tagline, first_brewed, description } = beer;

  return (
    <div className="card-container">
      <img src={image_url} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{first_brewed}</p>
      <p>{tagline}</p>
      <RatingWidget />
    </div>
  );
};

export default BeerCard;
