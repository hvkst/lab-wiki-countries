import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';

function Countries() {
  const [countries, setCountries] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const { countryCode } = useParams();

  useEffect(() => {
    async function fetchSomething() {
      const apiURL = 'https://ih-countries-api.herokuapp.com/countries';
      const response = await fetch(apiURL);
      const data = await response.json();
      setCountries(data);
      setLoading(false);
    }
    fetchSomething();
  }, []);

  return (
    <>
      <div className="d-flex">
        <CountriesList {...{ loading, countries }} />
        {!loading && <CountryDetails {...{ countries }} />}
      </div>
    </>
  );
}
export default Countries;