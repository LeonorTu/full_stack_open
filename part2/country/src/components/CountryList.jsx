const CountryList = ({ countries }) => {
  if (countries === null) return <div>Please enter the filter</div>;
  if (countries.length === 0) return <div>Country not found</div>;
  else if (countries.length > 10)
    return <div>Too many matches, specify another filter</div>;
  else if (countries.length === 1) {
    const country = countries[0];
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <h4>Languages</h4>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          width='150'
        />
      </div>
    );
  } else
    return (
      <div>
        {countries.map((country) => (
          <div key={country.name.common}>{country.name.common}</div>
        ))}
      </div>
    );
};

export default CountryList;
