import { Button, Card, Chip, Skeleton } from "@nextui-org/react";
import { FaPlay } from "react-icons/fa";

/** @param {{ movie: import("@/pages/api/movies").ResponseData, isLoading: boolean; }} */
export default function PreviewMovie({ movie, isLoading }) {
  return (
    <Card className="mt-8 shadow-none">
      <div className="relative z-0 h-[35rem] w-full overflow-hidden rounded-xl">
        {isLoading ? (
          <Skeleton>
            <div className="h-full grid place-items-center">
              <div className="h-[35rem] bg-default-300"></div>
            </div>
          </Skeleton>
        ) : (
          <>
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black to-transparent"></div>
            <picture>
              <img className="w-full" src={movie.background} alt={movie.name} />
            </picture>

            <div className="absolute left-0 top-0 z-20 flex h-full w-full items-center">
              <div className="flex max-w-2xl flex-col items-start p-8">
                {movie.foreground && <>
                  <picture>
                    <img className="mb-4 h-24 object-contain" src={movie.foreground} alt={movie.name} />
                  </picture>
                </>}

                <h1 className="mb-2 text-3xl font-bold text-white">{movie.name}</h1>
                <div className="mb-4 flex space-x-2">
                  {movie.genres?.map((genre, index) => (
                    <Chip size="sm" radius="sm" key={index}>
                      {genre}
                    </Chip>
                  ))}
                </div>

                <p className="mb-4 text-[#a0a0a0]">{movie.description}</p>

                <div className="flex items-center space-x-2">
                  <Button><FaPlay size={12} /> Şimdi İzle</Button>
                  <Button>myanimelist.net</Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Card>
  );
}
