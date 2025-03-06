"use client";

import Link from "next/link";
import useFilteredMovies from "@/hooks/useFilteredMovies";
import Image from "next/image";

export default function MovieList() {
  const { movies, isLoading, error } = useFilteredMovies();

  if (isLoading)
    return (
      <div className="text-center py-[100px]">
        <p>Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="text-center py-[100px]">
        <p>{error.message}</p>
      </div>
    );

  return movies.length > 0 ? (
    <ul className="flex justify-center items-center flex-wrap gap-[50px] pt-[50px]">
      {movies.map(({ id, original_title, poster_path, vote_average }) => (
        <li
          className="rounded-2xl relative overflow-hidden hover:shadow-[0px_0px_5px_1px_#fe9a00] focus-visible:shadow-[0px_0px_5px_1px_#fe9a00] transition-shadow group"
          key={id}
          tabIndex={1}
        >
          <Link href={`/movie/${id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt={original_title}
              className="object-cover rounded-2xl hover:scale-110 focus-visible:scale-110 transition-transform"
              width={300}
              height={450}
              priority
            />
            <div className="text-amber-500 text-2xl absolute inset-0 flex justify-center items-center flex-col gap-[10px] bg-[rgba(0,_0,_0,_0.8)] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity pointer-events-none text-center p-[30px]">
              <p className="w-full break-words">{original_title}</p>
              <p className="w-full break-words">{vote_average.toFixed(1)} ★</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <div className="text-center py-[100px]">
      <p>None movies found</p>
    </div>
  );
}
