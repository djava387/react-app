import "./SearchBeer.scss";

const SearchBeer = (props) => {
  const { className, onChangeHandler, placeholder } = props;
  return (
    <input
      type="text"
      className={className}
      onChange={onChangeHandler}
      placeholder={placeholder}
    />
  );
};
export default SearchBeer;
