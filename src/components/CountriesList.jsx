// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DotLoader from 'react-spinners/DotLoader';

const spinnerWrapperStyle = {
  width: '100vw',
  height: '80vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

function CountriesList({ loading, countries, searchInput }) {
  console.log(searchInput.searchInput);
  return (
    <>
      {loading && (
        <div style={spinnerWrapperStyle}>
          <DotLoader color="#36d7ff" size={150} />
        </div>
      )}
      {!loading && (
        <div
          className="col-5"
          style={{ maxHeight: '94vh', overflow: 'scroll' }}
        >
          <div className="list-group countries-list">
            {countries
              .filter((country) =>
                country.name.common
                  .toLowerCase()
                  .includes(searchInput.trim().toLowerCase())
              )
              .sort((a, b) => a.alpha2Code.localeCompare(b.alpha2Code))
              .map((country) => {
                return (
                  <li key={country._id}>
                    <Link
                      className="list-group-item list-group-item-action "
                      to={country.alpha3Code}
                    >
                      <img
                        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                        alt={country.name.official}
                        style={{ width: '25px', marginRight: '15px' }}
                      />
                      {country.alpha2Code} {country.name.official}
                    </Link>
                  </li>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}
export default CountriesList;
