const Persons = ({ persons = [], search, deleteHandler }) => {
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      {filteredPersons.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
          <button onClick={() => deleteHandler(person.name, person.id)}>
            delete
          </button>
          <br />
        </p>
      ))}
    </div>
  );
};

export default Persons;
