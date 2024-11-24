import EpisodeCard from "@/pages/components/episode-card.jsx";
import { Tab, Tabs } from "@nextui-org/react";

/** @param {{ movie: import("@/pages/api/movies").ResponseData }} params */
export default function SeasonBar({ movie }) {
  const seasons = movie?.episodes || [[]];

  return (
    <Tabs color="primary" variant="solid" className="mt-4 flex justify-center">
      {seasons.map((episodes, seasonId) => (
        <Tab key={seasonId} title={`${seasonId + 1}. Sezon`}>
          <div className="max-h-[50rem] overflow-auto rounded-xl">
            {episodes.map((episode, episodeId) => <EpisodeCard key={episodeId} seasonId={seasonId} movie={movie} episode={episode} />)}
          </div>
        </Tab>
      ))}
    </Tabs>
  );
}