import axios, { isAxiosError } from "axios";
import type { FilterBy } from "@/constants";

const API_KEY = "9a8ad990026fd09fe799383aad117e18";
const BASE_URL = "https://api.themoviedb.org/3/movie";

export const getMovies = async (filter: FilterBy) => {
  try {
    const res = await axios.get(`${BASE_URL}/${filter}?api_key=${API_KEY}`);
    return res.data;
  } catch (err) {
    throw handleError(err);
  }
};

export const getMovieDetails = async (id: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/${id}?api_key=${API_KEY}`);
    return res.data;
  } catch (err) {
    throw handleError(err);
  }
};

function handleError(err: unknown) {
  if (isAxiosError(err) && process.env.NODE_ENV !== "production") {
    console.error("Error fetching movies:", err.response?.data ?? err.message);
  } else if (process.env.NODE_ENV !== "production") {
    console.error("Unexpected error:", err);
  }

  return new Error("Something went wrong. Please try again later!");
}
