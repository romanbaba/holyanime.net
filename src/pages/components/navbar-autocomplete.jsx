import { getMovies } from "@/functions/movies.js";
import { SWR } from "@/functions/swr.js";
import { Autocomplete, AutocompleteItem, Skeleton } from "@nextui-org/react";

export default function NavbarAutocomplete() {
  /** @type {import("swr").SWRResponse<import("@/pages/api/movies").ResponseData[]>} */
  const { isLoading, data } = SWR("/api/movies");
  const { movies } = getMovies(isLoading ? [] : data);

  return (
   <>
    {isLoading ? (
      <Skeleton className="rounded-xl">
        <div className="w-screen bg-default-300 h-10"></div>
      </Skeleton>
    ) : (
      <Autocomplete defaultItems={movies} placeholder={movies.at(Math.random() * movies.length).name}>
      {(movie) => (
        <AutocompleteItem key={movie.id} textValue={movie.name}>
          {movie.name}
        </AutocompleteItem>
      )}
    </Autocomplete>
    )}
   </>
  );
}