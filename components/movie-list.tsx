"use client";

import { getMovies } from "@/api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import useStore from "@/store";

export default function MovieList() {
  const { filter } = useStore();

  // const query = useQuery({queryKey:["movies"], queryFn:() =>  })
  // getMovies(filter);

  return (
    <ul className="flex justify-center items-center flex-wrap gap-[50px] pt-[50px]">
      <li className="w-[300px] rounded-2xl relative overflow-hidden hover:shadow-[0px_0px_5px_1px_#fe9a00] transition-shadow group">
        <Link href="/">
          <Image
            src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            loading="lazy"
            className="w-full aspect-[2/3] object-cover rounded-2xl hover:scale-110 transition-transform"
          />
          <div className="text-amber-500 text-2xl absolute inset-0 flex justify-center items-center flex-col gap-[5px] bg-[rgba(0,_0,_0,_0.8)] opacity-0 group-hover:opacity-100 transition-opacity">
            <p>Tytuł</p>
            <p>Ocena ★</p>
          </div>
        </Link>
      </li>
    </ul>
  );
}
