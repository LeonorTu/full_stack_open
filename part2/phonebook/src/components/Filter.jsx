const Filter = ({ search, searchHandler }) => {
  return (
    <div>
      filter shown with
      <input value={search} onChange={searchHandler} />
    </div>
  );
};
export default Filter;
