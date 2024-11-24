import { getMovies } from "@/functions/movies.js";
import { SWR } from "@/functions/swr.js";
import Groups from "@/pages/components/groups.jsx";
import PreviewMovie from "@/pages/components/preview-movie.jsx";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import MovieCard from "./components/movie-card";

export default function Index() {
  /** @type {import("swr").SWRResponse<import("@/pages/api/movies").ResponseData[]>} */
  const { isLoading, data } = SWR("/api/movies");
  const { preview, featuredMovies } = getMovies(isLoading ? [] : data);

  const session = useSession();
  useEffect(() => {
    if (session.status === "authenticated") {
      axios.post("/api/users", { ...session.data.user });
    }
  }, [session.status, session.data?.user]);

  return (
    <div>
      <PreviewMovie movie={preview} isLoading={isLoading} />

      <Groups title="Öne Çıkan Seriler" ariaDescription="En çok beğenilen ve ilgi gören seriler! Hikayeler, karakterler ve maceralarla dolu bu özel seçimleri keşfedin.">
        {featuredMovies.map((movie, index) => <MovieCard key={index} movie={movie} isLoading={isLoading} />)}
      </Groups>
    </div>
  );
}