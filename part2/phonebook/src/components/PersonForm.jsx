const PersonForm = ({
  addPerson,
  name,
  nameHandler,
  number,
  numberHandler,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={name} onChange={nameHandler} />
      </div>
      <div>
        number: <input value={number} onChange={numberHandler} />
      </div>
      <button type="submit">add</button>
    </form>
  );
};

export default PersonForm;
