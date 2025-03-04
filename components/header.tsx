import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FILTER_BY, SORT_BY, type FilterBy, type SortBy } from "@/constants";

export default function Header() {
  return (
    <header className="flex justify-between flex-wrap gap-[50px]">
      <h1 className="text-5xl select-none">
        Mov<span className="text-amber-500">ies</span>
      </h1>
      <div className="flex items-center gap-[30px]">
        <div className="flex flex-col gap-[6px]">
          <Label className="pl-[6px]" htmlFor="filter">
            Filter by
          </Label>
          <Select name="filter-by" value="now_playing">
            <SelectTrigger className="w-[280px]" id="filter">
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
        </div>
        <div className="flex flex-col gap-[6px]">
          <Label className="pl-[6px]" htmlFor="sort">
            Sort by
          </Label>
          <Select name="sort-by" value="popularity.desc">
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
        </div>
      </div>
    </header>
  );
}
