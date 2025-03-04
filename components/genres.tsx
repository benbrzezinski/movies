import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { GENRES } from "@/constants";

export default function Genres() {
  return (
    <div className="flex flex-col items-center gap-[30px] py-[30px] border-b-1">
      <p className="text-center text-2xl">Genres</p>
      <RadioGroup
        className="max-w-[900px] flex flex-row flex-wrap justify-center items-center"
        value="all"
      >
        {GENRES.map((genre, i) => (
          <div className="flex items-center space-x-2" key={genre.value}>
            <RadioGroupItem value={genre.value} id={`r${i}`} />
            <Label htmlFor={`r${i}`} className="capitalize">
              {genre.value}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
