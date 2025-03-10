"use client";

import Image from "next/image";
import Loader from "./loader";
import { use } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "@/api";
import type { MovieDetailsTypes } from "@/types";
import { TMDB_IMAGE_BASE_URL } from "@/constants";
import { formatRuntime } from "@/lib/utils";

interface MovieDetailsProps {
  params: Promise<{ id: string }>;
}

export default function MovieDetails({ params }: MovieDetailsProps) {
  const { id } = use(params);

  const {
    data: movie_details,
    isLoading,
    error,
  } = useQuery<MovieDetailsTypes>({
    queryKey: ["movie_details", id],
    queryFn: () => getMovieDetails(id),
  });

  if (isLoading) {
    return (
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-[30px] text-center pointer-events-none">
        <p>{error.message}</p>
      </div>
    );
  }

  if (!movie_details) {
    return (
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-[30px] text-center pointer-events-none">
        <p>Movie details not found. Please check back later!</p>
      </div>
    );
  }

  const {
    genres,
    original_title,
    overview,
    poster_path,
    release_date,
    runtime,
    vote_average,
    vote_count,
  } = movie_details;

  return (
    <div className="flex flex-col items-center gap-[50px] lg:flex-row">
      <Image
        src={`${TMDB_IMAGE_BASE_URL}${poster_path}`}
        alt={original_title}
        width={400}
        height={600}
        className="object-cover aspect-[2/3] rounded-xl bg-amber-600"
        priority
        onLoad={e => {
          e.currentTarget.style.backgroundColor = "unset";
        }}
      />
      <div className="flex flex-col gap-[30px] max-w-[600px]">
        <div className="flex flex-wrap gap-[15px]">
          <h1 className="text-4xl">{original_title}</h1>
          <div className="flex items-end gap-[15px]">
            <p className="text-sm">{release_date.slice(0, 4)}</p>
            <p className="text-sm">{formatRuntime(runtime)}</p>
          </div>
        </div>
        <div className="flex items-center gap-[6px]">
          <Image
            src="/star.svg"
            alt="Star rating icon"
            width={22}
            height={22}
          />
          <p className="text-xl">
            {vote_average.toFixed(1)} /{" "}
            {vote_count === 1
              ? `${vote_count} rating`
              : `${vote_count} ratings`}
          </p>
        </div>
        <p>{overview}</p>
        <div className="flex flex-wrap gap-[10px]">
          {genres.map(({ name }) => (
            <p className="border rounded-md p-[8px]" key={name}>
              {name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
