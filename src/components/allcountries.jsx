const AllCountries = ({
  handleClickAllCountries,
  allcountries,
  query,
  setQuery,
  regionFilter,
  setRegionFilter,
  regoins,
}) => {
  return (
    <div className="manageItems">
      <div className="btnDiv text-center">
        <div className="btnOptions">
          <button
            className="btnBack mb-2"
            type="button"
            onClick={() => {
              handleClickAllCountries();
              setQuery("");
            }}
          >
            <i className="bi bi-arrow-left-circle-fill"></i>
          </button>
          <input
            type="text"
            className="inputFilter"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by country..."
          />
          <button
            className="clearSearch"
            onClick={() => {
              setQuery("");
              setRegionFilter("");
            }}
          >
            Clear search & region filter
          </button>
        </div>
        <p className="leng">Countries: ({allcountries.length})</p>
        <div className="regionFilter">
          <h5>Filtering by region</h5>
          <select
            className="selectRegion"
            onChange={(e) => setRegionFilter(e.target.value)}
          >
            <option>Choose region</option>
            {regoins.map((region, ind) => (
              <option key={ind}>{region}</option>
            ))}
          </select>
        </div>
      </div>
      {allcountries
        .filter((reg) => reg.region.includes(regionFilter))
        .filter((elem) => elem.name.common.toLowerCase().includes(query))
        .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
        .map((country, ind) => {
          return (
            <div key={ind} className="set">
              <div className="flip-card-inner">
                <div className="card_flags">
                  <div className="card-body text-center bg-secondary text-white rounded-top">
                    <p className="card-text rounded-top">
                      {country.name.common}
                    </p>
                  </div>
                  <img src={country.flags.png} className="img" alt="..." />
                </div>
                <div className="card_flags_flip">
                  <div className="text-center">
                    <p className="card-text_flip rounded-top">
                      {country.name.common}
                    </p>
                  </div>
                  <div className="data">
                    <li
                      className="list-group-item d-flex ms-1"
                      style={{ height: "25px" }}
                    >
                      <i className="me-2 bi bi-geo-alt"></i>
                      <span className="fw-bold me-2">Region: </span>
                      <p className="text">{country.region}</p>
                    </li>
                    <li
                      className="list-group-item d-flex ms-1"
                      style={{ height: "25px" }}
                    >
                      <i className="me-2 bi bi-clock"></i>
                      <span className="fw-bold me-2">Timezone: </span>
                      <p className="text">
                        {Object.values(country.timezones)[0]}
                      </p>
                    </li>
                    <li
                      className="list-group-item d-flex ms-1"
                      style={{ height: "25px" }}
                    >
                      <i className="me-2 bi bi-people-fill"></i>
                      <span className="fw-bold me-2">Population: </span>
                      <p className="text">{country.population}</p>
                    </li>
                    <li
                      className="list-group-item d-flex ms-1"
                      style={{ height: "25px" }}
                    >
                      <i className="me-2 bi bi-building"></i>
                      <span className="fw-bold me-2">Capital: </span>
                      <p className="text">{country.capital}</p>
                    </li>
                    <li
                      className="list-group-item d-flex ms-1"
                      style={{ height: "25px" }}
                    >
                      <i className="me-2 bi bi-geo-fill"></i>
                      <span className="fw-bold me-2">Area: </span>
                      <p className="text">
                        {country.area} {"-m"} <sup>2</sup>
                      </p>
                    </li>
                    <li
                      className="list-group-item d-flex ms-1"
                      style={{ height: "25px" }}
                    >
                      <i className="me-2 bi bi-cash-coin"></i>
                      <span className="fw-bold me-2">Currencies: </span>
                      <p className="text" style={{ fontSize: "14.5px" }}>
                        <small>
                          {country.currencies
                            ? Object.values(country.currencies)[0].name
                            : "unknown"}
                          {"("}
                          {country.currencies
                            ? Object.values(country.currencies)[0].symbol
                            : null}
                          {")"}
                        </small>
                      </p>
                    </li>
                    <li className="list-group-item d-flex ms-1">
                      <i className="me-2 bi bi-translate"></i>
                      <span className="fw-bold me-2">Languages: </span>
                      <p className="text ">
                        <small>
                          {country.languages
                            ? Object.values(country.languages).join(", ")
                            : "unknown"}
                        </small>
                      </p>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AllCountries;
