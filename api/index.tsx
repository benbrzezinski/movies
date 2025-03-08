import type { FilterBy } from "@/constants";
import axios, { isAxiosError } from "axios";

const API_KEY = "9a8ad990026fd09fe799383aad117e18";
const BASE_URL = "https://api.themoviedb.org/3/movie";

export const getMovies = async (filter: FilterBy) => {
  try {
    const res = await axios.get(`${BASE_URL}/${filter}?api_key=${API_KEY}`);
    return res.data;
  } catch (err) {
    if (isAxiosError(err) && process.env.NODE_ENV !== "production") {
      console.error(
        "Error fetching movies:",
        err.response?.data ?? err.message
      );
    } else if (process.env.NODE_ENV !== "production") {
      console.error("Unexpected error:", err);
    }

    throw new Error("Something went wrong. Please try again later!");
  }
};
