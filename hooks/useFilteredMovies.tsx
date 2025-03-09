import useStore from "@/store";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/api";
import type { Movie } from "@/types";
import { filterMoviesByGenre, sortMovies } from "@/lib/utils";

const useFilteredMovies = () => {
  const { filter, sort, genre } = useStore();
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
