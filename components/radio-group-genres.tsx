"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { GENRES, type Genre } from "@/constants";
import useStore from "@/store";

export default function RadioGroupGenres() {
  const { genre, setGenre } = useStore();

  return (
    <RadioGroup
      className="max-w-[700px] flex flex-row flex-wrap justify-center items-center"
      value={genre}
      onValueChange={value => setGenre(value as Genre)}
    >
      {GENRES.map((genre, i) => (
        <div
          className="flex items-center space-x-2 w-[120px] h-[20px]"
          key={genre.value}
        >
          <RadioGroupItem value={genre.value} id={`r${i}`} />
          <Label htmlFor={`r${i}`} className="capitalize cursor-pointer">
            {genre.value}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
