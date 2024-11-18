import { Badge, Button, Flex, Grid, Heading, Separator, Text } from "@radix-ui/themes";
import axios from "axios";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

export async function getStaticProps() {
  const response = await axios.get("http://localhost:3000/api/movies");
  const movies = response.data;
  return { props: { movies } };
}

/** @param {{ movies: import("@/pages/api/movies").ResponseData[]; }} params */
export default function Page({ movies }) {
  const movie = movies[0];

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

    <Flex mt={"2rem"} direction={"column"}>
      <Heading>Öne Çıkan Seriler</Heading>
      <Separator my="2" size="4" />

      <Grid columns={"4"} gap={"3"}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Link key={index} href={`movies/${movie.id}`}>
            <Flex className="bg-[#18191b] border border-[#2c2f33] hover:border-white transition-all duration-200 cursor-pointer rounded-xl" direction={"column"}>
              <picture><img className="rounded-t-xl w-full h-52 object-cover" src={movie.background} alt="" /></picture>

              <Flex direction={"column"} p={"2"}>
                <Text>{movie.name}</Text>
                <Flex justify={"between"}>
                  <Text color="gray" className="dark">{movie.episodes.length || "0"}. Sezon {movie.episodes?.[movie.episodes.length - 1]?.length || "0"}. Bölüm</Text>
                  <Text color="gray" className="dark">{movie.episodes?.[movie.episodes.length - 1]?.[movie.episodes?.[movie.episodes.length - 1].length - 1]?.date || "Bilinmiyor"}</Text>
                </Flex>
              </Flex>
            </Flex>
          </Link>
        ))}
      </Grid>
    </Flex>

    <Flex mt={"2rem"} direction={"column"}>
      <Heading>Yeni Eklenen Seriler</Heading>
      <Separator my="2" size="4" />

      <Grid columns={"4"} gap={"3"}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Link key={index} href={`movies/${movie.id}`}>
            <Flex className="bg-[#18191b] border border-[#2c2f33] hover:border-white transition-all duration-200 cursor-pointer rounded-xl" direction={"column"}>
              <picture><img className="rounded-t-xl w-full h-52 object-cover" src={movie.background} alt="" /></picture>

              <Flex direction={"column"} p={"2"}>
                <Text>{movie.name}</Text>
                <Flex justify={"between"}>
                  <Text color="gray" className="dark">{movie.episodes.length || "0"}. Sezon {movie.episodes?.[0]?.length || "0"}. Bölüm</Text>
                  <Text color="gray" className="dark">{movie.episodes?.[movie.episodes.length - 1]?.[movie.episodes?.[movie.episodes.length - 1].length - 1]?.date || "Bilinmiyor"}</Text>
                </Flex>
              </Flex>
            </Flex>
         </Link>
        ))}
      </Grid>
    </Flex>

    <Flex mt={"2rem"} direction={"column"}>
      <Heading>Filmler</Heading>
      <Separator my="2" size="4" />

      <Grid columns={"4"} gap={"3"}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Link key={index} href={`movies/${movie.id}`}>
            <Flex className="bg-[#18191b] border border-[#2c2f33] hover:border-white transition-all duration-200 cursor-pointer rounded-xl" direction={"column"}>
              <picture><img className="rounded-t-xl w-full h-52 object-cover" src={movie.background} alt="" /></picture>

              <Flex direction={"column"} p={"2"}>
                <Text>{movie.name}</Text>
                <Flex justify={"between"}>
                  <Text color="gray" className="dark">{movie.episodes.length || "0"}. Sezon {movie.episodes?.[0]?.length || "0"}. Bölüm</Text>
                  <Text color="gray" className="dark">{movie.episodes?.[movie.episodes.length - 1]?.[movie.episodes?.[movie.episodes.length - 1].length - 1]?.date || "Bilinmiyor"}</Text>
                </Flex>
              </Flex>
            </Flex>
          </Link>
        ))}
      </Grid>
    </Flex>
    </Flex>
  );
}