import { Label } from "@/components/ui/label";
import SelectFilterBy from "./select-filter-by";
import SelectSortBy from "./select-sort-by";

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
          <SelectFilterBy />
        </div>
        <div className="flex flex-col gap-[6px]">
          <Label className="pl-[6px]" htmlFor="sort">
            Sort by
          </Label>
          <SelectSortBy />
        </div>
      </div>
    </header>
  );
}
