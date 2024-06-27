import React, { useEffect, useState } from "react";
import { getAllCountries } from "../../api/countriesApi";
import { Country } from "../../types/Country";
import CountryCard from "../CountryCard/CountryCard";
import "./CountriesList.scss";

const CountriesList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selected, setSelected] = useState<Country[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCountries();
        const sortedData = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, []);

  const handleSelect = (country: Country) => {
    setSelected([...selected, country]);
    setCountries(
      countries.filter((c) => c.name.common !== country.name.common)
    );
  };

  const handleDeSelect = (country: Country) => {
    setSelected(selected.filter((c) => c.name.common !== country.name.common));
    setCountries([...countries, country]);
  };

  return (
    <div>
      <h2>Favorite</h2>
      <ul className="cardGrid">
        {selected
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          .map((country) => (
            <li className="countryCard-list" key={country.name.common}>
              <CountryCard
                country={country}
                isFavorite={true}
                onClick={() => handleDeSelect(country)}
              />
            </li>
          ))}
      </ul>
      <h2>Countries</h2>
      <ul className="cardGrid">
        {countries
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          .map((country) => (
            <li className="countryCard-list" key={country.name.common}>
              <CountryCard
                country={country}
                isFavorite={false}
                onClick={() => handleSelect(country)}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CountriesList;
