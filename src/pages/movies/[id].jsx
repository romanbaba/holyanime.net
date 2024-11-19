import { Badge, Box, Button, Flex, Heading, Tabs, Text } from "@radix-ui/themes";
import axios from "axios";
import Link from "next/link";
import { FaCalendar, FaPlay } from "react-icons/fa";

export async function getStaticPaths() {
  const response = await axios.get("http://localhost:3000/api/movies");
  const movies = response.data;

  const paths = movies.map((movie) => ({
    params: { id: movie.id.toString() }, 
  }));

  return { paths, fallback: false };
}

/** @param {{ params: { id: string } }} params */
export async function getStaticProps({ params }) {
  const response = await axios.get(`http://localhost:3000/api/movies?id=${params.id}`);
  /** @type {{ success: boolean; data: import("@/pages/api/movies").ResponseData }} */
  const data = response.data;
  const movie = data.success ? data.data : null;

  return { props: { movie } };
}

/** @param {{ movie: import("@/pages/api/movies").ResponseData }} params */
export default function Movie({ movie }) {
  return (
    <Flex direction={"column"} mr={"3rem"}>
      <Flex mt={"2rem"} width={"100%"}>
      <Flex className="relative z-0 overflow-hidden bg-[#212225] border border-[#2c2f33] w-full h-[35rem] rounded-xl">
        <Flex className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></Flex>
        <picture className="w-full"><img src={movie.background} alt={movie.name} className="w-full h-full object-cover" /></picture>

        <Flex align={"center"} position={"absolute"} top={"0"} left={"0"} className="w-full h-full z-20">
          <Flex direction={"column"} align={"start"} className="p-8 max-w-2xl">
            <picture><img src={movie.foreground} alt={movie.name} className="mb-4 h-24 object-contain" /></picture>
            <Heading className="text-3xl font-bold text-white mb-2">{movie.name}</Heading>

            <Flex className="flex space-x-2 mb-4">
              {movie.genres.map((genre, index) => <Badge key={index} variant={"solid"}>{genre}</Badge>)}
            </Flex>
            <Text className="text-[#A0A0A0] mb-4">
              {movie.description}
            </Text>

            <Flex align={"center"} className="space-x-2">
              <Link href={`movies/${movie.id}`}><Button><FaPlay size={12} /> Hemen İzle</Button></Link>
              <Link href={movie.myanimelist}><Button>myanimelist.net</Button></Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      </Flex>

      <Tabs.Root defaultValue="0" mt={"1rem"}>
        <Tabs.List justify={"center"}>
          {movie.episodes.map((_, index) => <Tabs.Trigger key={index} value={`${index}`}><span className="cursor-pointer">{index + 1}. Sezon</span></Tabs.Trigger>)}
        </Tabs.List>

        <Box pt="3">
          {movie.episodes.map((seasons, seasonIndex) => (
            <Tabs.Content key={seasonIndex} value={`${seasonIndex}`} className="space-y-2">
              {seasons.map((episode, index) => (
                <Flex className="bg-[#18191b] border border-[#2c2f33] hover:border-white transition-all h-32 duration-200 cursor-pointer rounded" p={"1"} key={index} >
                  
                  <Flex mt={"1"} mx={"2"} direction={"column"} justify={"between"}>
                    <Flex direction={"column"}>
                      <Heading>S{seasonIndex + 1} B{index + 1} - {episode.name}</Heading>
                      <Text color="gray" className="line-clamp-2">{episode.description}</Text>
                    </Flex>

                    <Flex gap={"2"} mt={"1"}>
                      <Text color="gray"> {new Date(episode.date).toLocaleDateString("tr", { dateStyle: "long" })}</Text>
                      <Text color="gray">●</Text>
                      <Text color="gray"> {episode.source}</Text>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
            </Tabs.Content>
          ))}
        </Box>
      </Tabs.Root>
    </Flex>
  );
}