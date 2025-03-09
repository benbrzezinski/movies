"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { GENRES, type Genre } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function RadioGroupGenres() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentGenre = searchParams.get("genre") ?? GENRES[0].value;

  const handleChange = (value: Genre) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("genre", value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <RadioGroup
      name="genres"
      className="max-w-[700px] flex flex-row flex-wrap justify-center items-center"
      value={currentGenre}
      onValueChange={handleChange}
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
