/**
 * @typedef {{
 * id: string;
 * name: string;
 * description: string;
 * genres: string[];
 * score: string;
 * background: string;
 * foreground: string;
 * episodes: any[][];
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
      id: "62d0802f-8b99-442e-ae3a-a7ba18a83c06",
      name: "Blue Lock",
      description: "Japonya millî futbol takımı, 2018 FIFA Dünya Kupası'ndaki kötü yenilgiden sonra yeniden oluşum sürecine girer. Takımın en büyük eksiklikleri arasında zafere götürecek kilit bir golcünün bulunmadığı fark edilir.",
      genres: ["Dram", "Komedi", "Aksiyon", "Macera"],
      score: "8.3",
      background: "https://wsrv.nl/?output=webp&maxage=31d&url=diziwatch.net/uploads/series/blue-lock/player.jpg",
      foreground: "https://upload.wikimedia.org/wikipedia/commons/2/22/Blue_Lock_Logo.png",
      episodes: [
        [
          { name: "ep 1", date: "5 kasım" },
        ],
        [
          { name: "ep 1", date: "12 kasım" },
          { name: "ep 2", date: "19 kasım" },
        ],
        [
          { name: "ep 1", date: "26 kasım" },
          { name: "ep 2", date: "2 aralık" },
          { name: "ep 3", date: "9 aralık" },
          { name: "ep 4", date: "16 aralık" },
        ]
      ],
      myanimelist: "https://myanimelist.net/anime/49596/Blue_Lock?cat=anime"
    }
  ];

  if (("id" in req.query && req.query.id)) {
    const id = req.query.id;
    const movie = movies.find((response) => response.id === id);

    res.status(200).send({ success: Boolean(movie), data: { ...movie } });
    return;
  }

  res.status(200).send([ ...movies ]);
}