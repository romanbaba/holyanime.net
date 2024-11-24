import { toSlug } from "@/functions/strings";
import { Card, Chip } from "@nextui-org/react";
import Link from "next/link";

/** @param {{ key: string | number; episodeId: string | number; seasonId: string | number; episode: any; movie: import("@/pages/api/movies").ResponseData }} params */
export default function EpisodeCard({ key = 0, seasonId = 0, episode, movie }) {
  return (
    <Link className="flex gap-2 my-2 mr-2 " key={key} href={`/movies/${toSlug(movie.name)}/episodes/${seasonId}/${key}`}>
        <Card className="shadow-none size-80">
          <div className="relative z-0 overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent"></div>
  
            <picture>
              <img className="w-full" src={"https://image.tmdb.org/t/p/w300/ejH2YmotIR43Ly3rg4sFyRDpgTW.jpg"} alt={movie.name} />
            </picture>
  
            <div className="absolute left-0 top-0 z-20 flex h-full w-full items-end justify-end p-2">
              
  
              <Chip className="bg-black" radius="sm">23:51</Chip>
            </div>
          </div>
        </Card>

        <div className="my-1 flex flex-col justify-between w-full">
          <div>
          <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{episode.name}</h2>

          <span className="text-[#f1f7feb5] text-sm">22 Ekim 2022</span>
          </div>
          <p className="text-[#f1f7feb5] max-w-5xl">Birinci sınıf forveti Isagi Yoichi, topu kalenin önündeki oyuncu arkadaşına verdiği için Milli Takım şansını kaybetti. İşte o zaman Blue Lock için bir davetiye alır. Japonya'nın Dünya Kupası'nı kazanabilmesi için lise çağındaki 300 forvet arasından dünyanın en iyi forvetlerinden birinin yetiştirildiği bir tesis.</p>
          </div>

        
        </div>
      </Link>
  );
}