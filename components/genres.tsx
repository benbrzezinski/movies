import RadioGroupGenres from "./radio-group-genres";

export default function Genres() {
  return (
    <div className="flex flex-col items-center gap-[30px] py-[30px] border-b-1">
      <p className="text-center text-2xl">Genres</p>
      <RadioGroupGenres />
    </div>
  );
}
