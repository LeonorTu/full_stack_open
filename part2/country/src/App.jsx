import { useState, useEffect } from 'react';
import countryService from './service/country';
import CountryList from './components/CountryList';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  const [searchCountries, setSearchCountries] = useState(null);

  useEffect(() => {
    countryService.getAll().then((data) => setCountries(data));
  }, []);

  const countryHandler = (event) => {
    setCountry(event.target.value);
    if (event.target.value.length === 0) setSearchCountries(null);
    else {
      const filterCountries = countries.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      );
      setSearchCountries(filterCountries);
    }
  };

  return (
    <div>
      <div>
        find countries
        <input value={country} onChange={countryHandler} />
        <CountryList countries={searchCountries} />
      </div>
    </div>
  );
}

export default App;
