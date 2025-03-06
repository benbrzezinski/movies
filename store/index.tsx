import {
  FILTER_BY,
  GENRES,
  SORT_BY,
  type FilterBy,
  type Genre,
  type SortBy,
} from "@/constants";
import { create } from "zustand";

interface Store {
  filter: FilterBy;
  sort: SortBy;
  genre: Genre;
  setFilter: (filter: FilterBy) => void;
  setSort: (sort: SortBy) => void;
  setGenre: (genre: Genre) => void;
}

const useStore = create<Store>(set => ({
  filter: FILTER_BY[0].value,
  sort: SORT_BY[0].value,
  genre: GENRES[0].value,
  setFilter: (filter: FilterBy) => set({ filter }),
  setSort: (sort: SortBy) => set({ sort }),
  setGenre: (genre: Genre) => set({ genre }),
}));

export default useStore;
