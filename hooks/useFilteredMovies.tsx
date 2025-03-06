import useStore from "@/store";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/api";
import type { Movie } from "@/types";
import { filterMoviesByGenre, sortMovies } from "@/lib/utils";

type Data = void | undefined | { results: Movie[] };

const useFilteredMovies = () => {
  const { filter, sort, genre } = useStore();
  const {
    data: res_body,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies", filter],
    queryFn: () => getMovies(filter),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
  });

  const data = res_body as Data;

  if (!data) return { movies: [], isLoading, error };

  const sortedMovies = sortMovies(data.results, sort);
  const filteredMovies = filterMoviesByGenre(sortedMovies, genre);

  return { movies: filteredMovies, isLoading, error };
};

export default useFilteredMovies;
