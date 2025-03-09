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
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SelectFilterBy() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentFilter = searchParams.get("filter") ?? FILTER_BY[0].value;

  const handleChange = (value: FilterBy) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("filter", value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Select name="filter-by" value={currentFilter} onValueChange={handleChange}>
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
