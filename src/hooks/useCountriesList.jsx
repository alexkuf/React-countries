import { useState, useEffect } from "react";
import { defaultCountry } from "../defaultCountry";

const useCountriesList = () => {
  const [country, setCountry] = useState(defaultCountry);
  const [countriesNames, setCountriesNames] = useState([]);
  const [allcountries, setAllCountries] = useState([]);
  const [selectValue, setSelectValue] = useState();
  const [btnClicked, setBtnClicked] = useState(false);
  const [query, setQuery] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const API_BASE = "https://restcountries.com/v3.1";

  const handleClickSelect = (e) => {
    setSelectValue(e.target.value);
  };

  const handleClickAllCountries = () => {
    if (btnClicked) {
      setBtnClicked(false);
    } else {
      setBtnClicked(true);
    }
  };

  useEffect(() => {
    getAllCountriesNames();
    async function getAllCountriesNames() {
      const url = `${API_BASE}/all?fields=name`;
      const response = await fetch(url);
      const data = await response.json();
      setCountriesNames(data);
    }
  }, []);

  useEffect(() => {
    let isCenceled = false;
    const getDataByName = async () => {
      if (
        typeof selectValue !== "undefined" &&
        selectValue !== "Choose a country:"
      ) {
        const response = await fetch(
          ` https://restcountries.com/v3.1/name/${selectValue}`
        );
        const data = await response.json();
        if (!isCenceled) {
          setCountry(await data[0]);
        }
      }
    };
    getDataByName();

    return () => {
      isCenceled = true;
    };
  }, [selectValue]);

  useEffect(() => {
    const getAllData = async () => {
      const response = await fetch(` https://restcountries.com/v3.1/all`);
      const data = await response.json();
      setAllCountries(await data);
    };
    getAllData();
  }, []);

  let regoins = [
    "Africa",
    "Antarctic",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  return {
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
  };
};

export default useCountriesList;
