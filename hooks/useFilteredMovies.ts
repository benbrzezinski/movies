import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/api";
import { filterMoviesByGenre, sortMovies } from "@/lib/utils";
import {
  FILTER_BY,
  type FilterBy,
  type Genre,
  GENRES,
  SORT_BY,
  type SortBy,
} from "@/constants";
import type { Movie } from "@/types";

const useFilteredMovies = () => {
  const searchParams = useSearchParams();
  const filter = (searchParams.get("filter") ?? FILTER_BY[0].value) as FilterBy;
  const sort = (searchParams.get("sort") ?? SORT_BY[0].value) as SortBy;
  const genre = (searchParams.get("genre") ?? GENRES[0].value) as Genre;

  const { data, isLoading, error } = useQuery<{ results: Movie[] }>({
    queryKey: ["movies", filter],
    queryFn: () => getMovies(filter),
  });

  if (!data) return { movies: [] as Movie[], isLoading, error };

  const sortedMovies = sortMovies(data.results, sort);
  const filteredMovies = filterMoviesByGenre(sortedMovies, genre);

  return { movies: filteredMovies, isLoading, error };
};

export default useFilteredMovies;
