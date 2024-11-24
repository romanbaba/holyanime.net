import { getMovie } from "@/functions/movies.js";
import { SWR } from "@/functions/swr.js";
import Comments from "@/pages/components/Comments";
import PreviewMovie from "@/pages/components/preview-movie.jsx";
import SeasonBar from "@/pages/components/season-bar.jsx";
import { useParams } from "next/navigation";

export default function Movie() {
  /** @type {{ slug: string }} */
  const params = useParams();

  /** @type {import("swr").SWRResponse<{ success: boolean; data: import("@/pages/api/movies").ResponseData }>} */
  const { isLoading, data, error } = SWR(`/api/movies?slug=${params?.slug}`);
  const movie = getMovie(isLoading ? {} : data);

  return (
   <div>
    <PreviewMovie movie={movie} isLoading={isLoading} />
    <SeasonBar movie={movie} />
    <Comments />
   </div>
  );
}