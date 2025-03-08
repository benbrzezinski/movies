import { Label } from "@/components/ui/label";
import SelectFilterBy from "./select-filter-by";
import SelectSortBy from "./select-sort-by";

export default function Header() {
  return (
    <header className="flex flex-col justify-between items-center gap-[30px] lg:flex-row">
      <h1 className="text-5xl select-none">
        Mov<span className="text-amber-500">ies</span>
      </h1>
      <div className="flex justify-center flex-wrap gap-[30px]">
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
