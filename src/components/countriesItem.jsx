const CountriesItems = ({ country, country: { flags }, selectValue }) => {
  return (
    <div className="card m-2">
      <img
        src={flags ? flags.png : null}
        className="card-img-top"
        alt={flags ? flags.alt : null}
        style={({ width: "700px" }, { height: "450px" })}
      />

      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex bg-secondary text-white">
          <i className="me-2 bi bi-globe-asia-australia"></i>
          <span className="fw-bold">Country: </span>
          <span className="flex-fill text-center fw-bold fs-5">
            {country ? selectValue : null}
          </span>
        </li>
        <li className="list-group-item d-flex">
          <i className="me-2 bi bi-geo-alt"></i>
          <span className="fw-bold">Region: </span>
          <span className="flex-fill text-center">
            {country ? country.region : null}
          </span>
        </li>
        <li className="list-group-item d-flex">
          <i className="me-2 bi bi-clock"></i>
          <span className="fw-bold">Timezone: </span>
          <span className="flex-fill text-center">
            {country ? Object.values(country.timezones)[0] : null}
          </span>
        </li>
        <li className="list-group-item d-flex">
          <i className="me-2 bi bi-people-fill"></i>
          <span className="fw-bold">Population: </span>
          <span className="flex-fill text-center">
            {country ? country.population : null}
          </span>
        </li>
        <li className="list-group-item d-flex">
          <i className="me-2 bi bi-building"></i>
          <span className="fw-bold">Capital: </span>
          <span className="flex-fill text-center">
            {country.capital ? country.capital : "unknown"}
          </span>
        </li>
        <li className="list-group-item d-flex">
          <i className="me-2 bi bi-geo-fill"></i>
          <span className="fw-bold">Area: </span>
          <span className="flex-fill text-center">
            {country ? country.area : null} {"-m"} <sup>2</sup>
          </span>
        </li>
        <li className="list-group-item d-flex">
          <i className="me-2 bi bi-translate"></i>
          <span className="fw-bold">Languages: </span>
          <span className="flex-fill text-center">
            {country.languages
              ? Object.values(country.languages).join(", ")
              : "unknown"}
          </span>
        </li>
        <li className="list-group-item d-flex">
          <i className="me-2 bi bi-cash-coin"></i>
          <span className="fw-bold">Currencies: </span>
          <span className="flex-fill text-center">
            {country.currencies
              ? Object.values(country.currencies)[0].name
              : "unknown"}{" "}
            {"("}
            {country.currencies
              ? Object.values(country.currencies)[0].symbol
              : null}
            {")"}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CountriesItems;
