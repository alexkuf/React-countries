import CountriesItems from "./countriesItem";
import AllCountries from "./allcountries";
import useCountriesList from "../hooks/useCountriesList";

const CountriesList = () => {
  const {
    handleClickSelect,
    handleClickAllCountries,
    country,
    selectValue,
    allcountries,
    countriesNames,
    btnClicked,
    query,
    setQuery,
    regionFilter,
    setRegionFilter,
    regoins,
  } = useCountriesList();

  return (
    <>
      {!btnClicked ? (
        <div
          className="container mt-2 pb-3 pe-3 ps-3 bg-light border rounded-3"
          style={{ width: "47rem" }}
        >
          <div className="row mt-1">
            <div className="d-grid gap-2 d-md-block text-center">
              <button
                className="btnS"
                type="button"
                onClick={handleClickAllCountries}
              >
                See all countries...
              </button>
            </div>

            <div className="col-8 mx-auto">
              <select
                className="w-100 mt-2 mb-3"
                id="country-selector"
                onChange={handleClickSelect}
              >
                <option value="Choose a country:">Choose a country:</option>
                {countriesNames
                  .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
                  .map((countriesName, ind) => {
                    return (
                      <option key={ind}>{countriesName.name.common}</option>
                    );
                  })}
              </select>
            </div>
          </div>

          <CountriesItems country={country} selectValue={selectValue} />
        </div>
      ) : (
        <AllCountries
          handleClickAllCountries={handleClickAllCountries}
          allcountries={allcountries}
          query={query}
          setQuery={setQuery}
          regionFilter={regionFilter}
          setRegionFilter={setRegionFilter}
          regoins={regoins}
        />
      )}
    </>
  );
};

export default CountriesList;
