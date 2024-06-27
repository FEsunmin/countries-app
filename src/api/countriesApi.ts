import axios from "axios";
import { Country } from "../types/Country";

const BASE_URL = "https://restcountries.com/v3.1";

export const getAllCountries = async (): Promise<Country[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/all`);
    return response.data as Country[];
  } catch (error) {
    console.error("Error fetching countries: ", error);
    throw error;
  }
};
