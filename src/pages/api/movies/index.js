import { toSlug } from "@/functions/strings";

/**
 * @typedef {{
 * id: string;
 * name: string;
 * description: string;
 * genres: string[];
 * score: string;
 * background: string;
 * foreground: string;
 * episodes: { id: string; name: string; description?: string; source: string; date: number; }[][];
 * myanimelist: string;
 * }} ResponseData
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse<ResponseData[]>} res 
 */
export default async function handler(req, res) {
  /** @type {ResponseData[]} */
  const movies = [
    {
      id: "1",
      name: "Blue Lock",
      description: "Japonya millî futbol takımı, 2018 FIFA Dünya Kupası'ndaki kötü yenilgiden sonra yeniden oluşum sürecine girer. Takımın en büyük eksiklikleri arasında zafere götürecek kilit bir golcünün bulunmadığı fark edilir.",
      genres: ["Dram", "Komedi", "Aksiyon", "Macera"],
      score: "8.3",
      background: "https://wsrv.nl/?output=webp&maxage=31d&url=diziwatch.net/uploads/series/blue-lock/player.jpg",
      foreground: "https://upload.wikimedia.org/wikipedia/commons/2/22/Blue_Lock_Logo.png",
      episodes: [
        [ { name: "Dream" }, { name: "topcuyum" }, { name: "topcuyum" }, { name: "topcuyum" }, { name: "topcuyum" }, { name: "topcuyum" } ],
        [ { name: "ameleyim" } ]
      ],
      myanimelist: "https://myanimelist.net/anime/49596/Blue_Lock?cat=anime",
    },
    {
      id: "2",
      name: "Dandadan",
      description: "Hayaletlerin mi yoksa uzaylıların mı var olduğunu kanıtlamak için iddiaya giren iki lise öğrencisi, paranormal tehditlerle karşı karşıya kalır, süper güçler kazanır ve aşka düşer.",
      genres: ["Aksiyon", "Komedi", "Doğaüstü Güçler"],
      score: "8.7",
      background: "https://wsrv.nl/?output=webp&maxage=31d&url=diziwatch.net/uploads/series/dandadan/player.jpg",
      foreground: "https://cdn.shopify.com/s/files/1/0569/8276/5751/files/DDD_logo_800w.png?v=1686849105",
      episodes: [],
      myanimelist: "https://myanimelist.net/anime/57334/Dandadan"
    },
    {
      id: "3",
      name: "Re:Zero kara Hajimeru Isekai Seikatsu",
      description: "Lise öğrencisi Subaru Natsuki bir gün bakkaldan dönerken öteki dünyaya çağırılır ve böylece hayatının en büyük dönüm noktası başlar. Kim tarafından çağrıldığını henüz bilmemekteydi ve saldırıya uğradığında işler çok daha kötü bir hal alır.",
      genres: ["Fantastik", "Psikolojik", "Gerilim", "Dram", "Isekai"],
      score: "8.5",
      background: "https://wsrv.nl/?output=webp&maxage=31d&url=diziwatch.net/uploads/series/rezero-kara-hajimeru-isekai-seikatsu/player.jpg",
      foreground: "https://upload.wikimedia.org/wikipedia/commons/3/34/Re_Zero_kara_Hajimeru_Isekai_Seikatsu_logo.png",
      episodes: [],
      myanimelist: "https://myanimelist.net/anime/31240/Re_Zero_kara_Hajimeru_Isekai_Seikatsu?q=rezero&cat=anime"
    },
    {
      id: "4",
      name: "Sousou no Frieren",
      description: "Şeytan kral yenildi ve galip olan kahraman grubu dağılmadan geri döndü. Büyücü Frieren, kahraman Himmel, rahip Heiter, ve savaşçı Eisen'den oluşan dört kişilik bu grup, birbirlerine veda etme zamanı geldiğinde on yıllık yolculuklarını anar.",
      genres: ["Dram", "Fantastik", "Macera"],
      score: "9.4",
      background: "https://wsrv.nl/?output=webp&maxage=31d&url=diziwatch.net/uploads/series/sousou-no-frieren/player.jpg",
      foreground: "https://upload.wikimedia.org/wikipedia/commons/d/d5/S%C5%8Ds%C5%8D_no_Frieren_logo.png",
      episodes: [],
      myanimelist: "https://myanimelist.net/anime/52991/Sousou_no_Frieren?q=frieren&cat=anime"
    },
    {
      id: "5",
      name: "Bleach",
      description: "Kurosaki Ichigo 15 yaşında normal bir öğrencidir, ancak ölülerle iletişim kurma becerisine sahiptir. Ichigo'nun babası ve kardeşleri aileye ait bir klinik işletmektedirler. Bir gün, shinigami - ölüm tanrısı - olan Kuchiki Rukia, Ichigo'nun odasına camdan girer ve Ichigo'nun onu görebildiğine çok şaşırır.",
      genres: ["Aksiyon", "Macera", "Süper Güçler", "Doğaüstü Güçler", "Komedi"],
      score: "8.5",
      background: "https://image.tmdb.org/t/p/original/qtfMr08KQsWXnCHY0a96N8NpQ2l.jpg",
      foreground: null,
      episodes: [],
      myanimelist: "https://myanimelist.net/anime/269/Bleach"
    },
    {
      id: "6",
      name: "Blue Box",
      description: "Badminton oyuncusu Taiki, basketbol yıldızı Chinatsu'ya uzaktan da olsa hayranlık duymaktadır. Ancak bir bahar günü, şaşırtıcı bir gelişme onları beklenmedik şekilde yakınlaştırır.",
      genres: ["Okul", "Romantizm", "Spor"],
      score: "8.d",
      background: "https://wsrv.nl/?output=webp&maxage=31d&url=diziwatch.net/uploads/series/ao-no-hako/player.jpg",
      foreground: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/eff8be61-f37e-4d1a-9354-822266bac6e4.__CR0,0,600,180_PT0_SX600_V1___.png",
      episodes: [],
      myanimelist: "https://myanimelist.net/anime/57181/Ao_no_Hako"
    }
  ];

  if (("slug" in req.query && req.query.slug)) {
    const slug = req.query.slug;
    const movie = movies.find((response) => toSlug(response.name) === slug);

    res.status(200).send({ success: Boolean(movie), data: { ...movie } });
    return;
  }

  res.status(200).send([ ...movies ]);
}