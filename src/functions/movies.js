/** @param {import("@/pages/api/movies").ResponseData[]} movies */
export function getMovies(movies) {
  const preview = movies.sort((a, b) => Number(b.score) - Number(a.score)).at(0);
  const featuredMovies = movies;

  return { preview, featuredMovies, movies };
}

/** @param {{ success: boolean; data: import("@/pages/api/movies").ResponseData }} response */
export function getMovie(response) {
  return response.data;
}