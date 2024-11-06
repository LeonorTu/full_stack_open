const Persons = ({ persons, search }) => {
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      {filteredPersons.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
          <br />
        </p>
      ))}
    </div>
  );
};

export default Persons;
