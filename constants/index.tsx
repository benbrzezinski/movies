export const FILTER_BY = [
  { text: "Now Playing", value: "now_playing" },
  { text: "Popular", value: "popular" },
  { text: "Top Rated", value: "top_rated" },
  { text: "Upcoming", value: "upcoming" },
] as const;
export type FilterBy = (typeof FILTER_BY)[number]["value"];

export const SORT_BY = [
  { text: "Popularity Desc", value: "popularity.desc" },
  { text: "Popularity Asc", value: "popularity.asc" },
  { text: "Release Date Desc", value: "release_date.desc" },
  { text: "Release Date Asc", value: "release_date.asc" },
  { text: "Vote Average Desc", value: "vote_average.desc" },
  { text: "Vote Average Asc", value: "vote_average.asc" },
] as const;
export type SortBy = (typeof SORT_BY)[number]["value"];

export const GENRES = [
  { value: "all", id: 0 },
  { value: "action", id: 28 },
  { value: "adventure", id: 12 },
  { value: "animation", id: 16 },
  { value: "comedy", id: 35 },
  { value: "crime", id: 80 },
  { value: "documentary", id: 99 },
  { value: "drama", id: 18 },
  { value: "family", id: 10751 },
  { value: "fantasy", id: 14 },
  { value: "history", id: 36 },
  { value: "horror", id: 27 },
  { value: "music", id: 10402 },
  { value: "mystery", id: 9648 },
  { value: "romance", id: 10749 },
  { value: "science fiction", id: 878 },
  { value: "tv movie", id: 10770 },
  { value: "thriller", id: 53 },
  { value: "war", id: 10752 },
  { value: "western", id: 37 },
] as const;
export type Genre = (typeof GENRES)[number]["value"];
