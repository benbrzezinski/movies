import type { FilterBy } from "@/constants";
import axios from "axios";

const API_KEY = "9a8ad990026fd09fe799383aad117e18";
const BASE_URL = "https://api.themoviedb.org/3/movie";

export const getMovies = async (filter: FilterBy) => {
  try {
    const res = await axios.get(`${BASE_URL}/${filter}?api_key=${API_KEY}`);
    return res.data;
  } catch (err) {
    throw new Error("An unexpected error occurred, please try again later.");
  }
};
