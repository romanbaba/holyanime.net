import { toSlug } from "@/functions/strings.js";
import { Card, Chip, Skeleton } from "@nextui-org/react";
import Link from "next/link";

/** @param {{ key?: string | number; movie: import("@/pages/api/movies").ResponseData; isLoading: boolean; }} */
export default function MovieCard({ key = 0, movie, isLoading }) {
  return (
    <>
      {isLoading ? (
        <Card className="shadow-none" key={key}>
          <Skeleton>
            <div className="h-full grid place-items-center">
              <div className="h-[13.008rem] bg-default-300"></div>
            </div>
          </Skeleton>
        </Card>
      ) : (
        <Link key={key} href={`movies/${toSlug(movie.name)}`}>
          <Card className="shadow-none hover:opacity-80">
            <div className="relative z-0 overflow-hidden">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent"></div>

              <picture>
                <img className="w-full" src={movie.background} alt={movie.name} />
              </picture>

              <div className="absolute left-0 top-0 z-20 flex h-full w-full items-end justify-between p-2">
                <div className="flex flex-col">
                  <h1>{movie.name}</h1>
                  <span className="text-xs text-[#a0a0a0]">1. Sezon 4. Bölüm</span>
                </div>

                <Chip className="bg-black" radius="sm">23:51</Chip>
              </div>
            </div>
          </Card>
        </Link>
      )}
    </>
  );
}
