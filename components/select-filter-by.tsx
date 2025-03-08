"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FILTER_BY, type FilterBy } from "@/constants";
import useStore from "@/store";

export default function SelectFilterBy() {
  const { filter, setFilter } = useStore();

  return (
    <Select
      name="filter-by"
      value={filter}
      onValueChange={value => setFilter(value as FilterBy)}
    >
      <SelectTrigger className="w-[290px]" id="filter">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {FILTER_BY.map(filter => (
            <SelectItem value={filter.value} key={filter.value}>
              {filter.text}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
