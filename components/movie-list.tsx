"use client";

import Link from "next/link";
import Image from "next/image";
import Loader from "./loader";
import useFilteredMovies from "@/hooks/useFilteredMovies";
import { TMDB_IMAGE_BASE_URL } from "@/constants";

export default function MovieList() {
  const { movies, isLoading, error } = useFilteredMovies();

  if (isLoading)
    return (
      <div className="text-center py-[100px] lg:py-[200px]">
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className="text-center py-[100px] lg:py-[200px]">
        <p>{error.message}</p>
      </div>
    );

  return movies.length > 0 ? (
    <ul className="flex justify-center items-center flex-wrap gap-[50px] pt-[50px]">
      {movies.map(({ id, original_title, poster_path, vote_average }, i) => (
        <li
          className="rounded-2xl relative overflow-hidden hover:shadow-[0px_0px_5px_1px_#fe9a00] focus-visible:shadow-[0px_0px_5px_1px_#fe9a00] transition-shadow duration-250 group"
          key={id}
          tabIndex={1}
        >
          <Link href={`/movie/${id}`}>
            <Image
              src={`${TMDB_IMAGE_BASE_URL}${poster_path}`}
              alt={original_title}
              className="bg-amber-600 aspect-[2/3] object-cover rounded-2xl hover:scale-110 transition-transform duration-250"
              width={300}
              height={450}
              priority={i < 8 ? true : false}
              onLoad={e => {
                e.currentTarget.style.backgroundColor = "unset";
              }}
            />
            <div className="text-amber-500 text-2xl font-semibold absolute inset-0 flex justify-center items-center flex-col gap-[10px] bg-[rgba(0,_0,_0,_0.8)] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-250 pointer-events-none text-center p-[30px]">
              <p className="w-full break-words">{original_title}</p>
              <div className="flex items-center gap-[6px]">
                <p className="w-full break-words">{vote_average.toFixed(1)}</p>
                <Image
                  src="/star.svg"
                  alt="Star rating icon"
                  width={22}
                  height={22}
                />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <div className="text-center py-[100px] lg:py-[200px]">
      <p>No movies available at the moment. Please check back later!</p>
    </div>
  );
}
