export interface Movie {
  genre_ids: number[];
  id: number;
  original_title: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export interface MovieDetailsTypes {
  genres: { name: string }[];
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
}
