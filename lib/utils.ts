import { GENRES, type Genre, SORT_BY, type SortBy } from "@/constants";
import type { Movie } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function formatDate(date: string) {
  return date.split("-").join("");
}

export function sortMovies(movies: Movie[], sort: SortBy) {
  switch (sort) {
    case SORT_BY[0].value:
      return movies.toSorted((a, b) => b.popularity - a.popularity);

    case SORT_BY[1].value:
      return movies.toSorted((a, b) => a.popularity - b.popularity);

    case SORT_BY[2].value:
      return movies.toSorted((a, b) => {
        const formattedDateA = formatDate(a.release_date);
        const formattedDateB = formatDate(b.release_date);

        return formattedDateB.localeCompare(formattedDateA);
      });

    case SORT_BY[3].value:
      return movies.toSorted((a, b) => {
        const formattedDateA = formatDate(a.release_date);
        const formattedDateB = formatDate(b.release_date);

        return formattedDateA.localeCompare(formattedDateB);
      });

    case SORT_BY[4].value:
      return movies.toSorted((a, b) => b.vote_average - a.vote_average);

    case SORT_BY[5].value:
      return movies.toSorted((a, b) => a.vote_average - b.vote_average);
  }
}

export function filterMoviesByGenre(movies: Movie[], genre: Genre) {
  switch (genre) {
    case GENRES[0].value:
      return movies;

    case GENRES[1].value:
      return movies.filter(({ genre_ids }) => genre_ids.includes(GENRES[1].id));

    case GENRES[2].value:
      return movies.filter(({ genre_ids }) => genre_ids.includes(GENRES[2].id));

    case GENRES[3].value:
      return movies.filter(({ genre_ids }) => genre_ids.includes(GENRES[3].id));

    case GENRES[4].value:
      return movies.filter(({ genre_ids }) => genre_ids.includes(GENRES[4].id));

    case GENRES[5].value:
      return movies.filter(({ genre_ids }) => genre_ids.includes(GENRES[5].id));

    case GENRES[6].value:
      return movies.filter(({ genre_ids }) => genre_ids.includes(GENRES[6].id));

    case GENRES[7].value:
      return movies.filter(({ genre_ids }) => genre_ids.includes(GENRES[7].id));

    case GENRES[8].value:
      return movies.filter(({ genre_ids }) => genre_ids.includes(GENRES[8].id));

    case GENRES[9].value:
      return movies.filter(({ genre_ids }) => genre_ids.includes(GENRES[9].id));

    case GENRES[10].value:
      return movies.filter(({ genre_ids }) =>
        genre_ids.includes(GENRES[10].id)
      );

    case GENRES[11].value:
      return movies.filter(({ genre_ids }) =>
        genre_ids.includes(GENRES[11].id)
      );

    case GENRES[12].value:
      return movies.filter(({ genre_ids }) =>
        genre_ids.includes(GENRES[12].id)
      );

    case GENRES[13].value:
      return movies.filter(({ genre_ids }) =>
        genre_ids.includes(GENRES[13].id)
      );

    case GENRES[14].value:
      return movies.filter(({ genre_ids }) =>
        genre_ids.includes(GENRES[14].id)
      );

    case GENRES[15].value:
      return movies.filter(({ genre_ids }) =>
        genre_ids.includes(GENRES[15].id)
      );

    case GENRES[16].value:
      return movies.filter(({ genre_ids }) =>
        genre_ids.includes(GENRES[16].id)
      );

    case GENRES[17].value:
      return movies.filter(({ genre_ids }) =>
        genre_ids.includes(GENRES[17].id)
      );

    case GENRES[18].value:
      return movies.filter(({ genre_ids }) =>
        genre_ids.includes(GENRES[18].id)
      );

    case GENRES[19].value:
      return movies.filter(({ genre_ids }) =>
        genre_ids.includes(GENRES[19].id)
      );
  }
}
