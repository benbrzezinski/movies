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
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SelectSortBy() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentSort = searchParams.get("sort") ?? SORT_BY[0].value;

  const handleChange = (value: SortBy) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Select name="sort-by" value={currentSort} onValueChange={handleChange}>
      <SelectTrigger className="w-[290px]" id="sort">
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
