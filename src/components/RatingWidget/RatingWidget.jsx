import { useState } from "react";

const RatingWidget = () => {
  // Use state hook to manage the current rating
  const [rating, setRating] = useState(0);

  //  toggle function: sets the rating to the given value
  // if it is not already set, or sets it to 0 if it is already set
  const toggle = (value) => {
    if (rating === value) {
      setRating(0);
    } else {
      setRating(value);
    }
  };

  return (
    <div>
      <h3>Rating: {rating}/Reviews</h3>
      {/*  Render a star for each possible rating  */}
      {[1.0, 2.0, 3.8, 4.6, 5.0].map((n) => (
        <span
          key={n}
          role="img"
          aria-label={`${n} out of 5 stars`}
          onClick={() => toggle(n)}
          style={{ cursor: "pointer" }}
        >
          {n <= rating ? "⭐️" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default RatingWidget;
