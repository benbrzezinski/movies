"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SORT_BY, type SortBy } from "@/constants";
import useStore from "@/store";

export default function SelectSortBy() {
  const { sort, setSort } = useStore();

  return (
    <Select
      name="sort-by"
      value={sort}
      onValueChange={value => setSort(value as SortBy)}
    >
      <SelectTrigger className="w-[280px]" id="sort">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {SORT_BY.map(sort => (
            <SelectItem value={sort.value} key={sort.value}>
              {sort.text}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
