import React from "react";
import { Country } from "../../types/Country";
import "./CountryCard.scss";

interface Props {
  country: Country;
  onClick: () => void;
  isFavorite?: boolean;
}

const CountryCard: React.FC<Props> = ({ country, onClick, isFavorite }) => {
  return (
    <div
      className={`CountryCard ${isFavorite ? "favorite" : ""}`}
      onClick={onClick}
    >
      <img className="countryFlag" src={country.flags.png} alt="flags" />
      <div className="countryInfo">
        <li className="countryName">{country.name.common}</li>
        <li className="countryCapital">{country.capital}</li>
      </div>
    </div>
  );
};

export default CountryCard;
