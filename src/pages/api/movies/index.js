/**
 * @typedef {{
 * id: string;
 * name: string;
 * description: string;
 * genres: string[];
 * score: string;
 * background: string;
 * foreground: string;
 * episodes: { name: string; description?: string; source: string; date: number; }[][];
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
          { name: "Dream", description: "Birinci sınıf forveti Isagi Yoichi, topu kalenin önündeki oyuncu arkadaşına verdiği için Milli Takım şansını kaybetti. İşte o zaman Blue Lock için bir davetiye alır. Japonya'nın Dünya Kupası'nı kazanabilmesi için lise çağındaki 300 forvet arasından dünyanın en iyi forvetlerinden birinin yetiştirildiği bir tesis.", source: "PuzzleSubs", date: 1665435600000 },
          { name: "Monster", description: "Kira, Blue Lock'tan elenir ve bununla birlikte, Isagi Yoichi'nin hayatında dünyanın en büyük pivotunu yaratmayı vaat eden Blue Lock'taki ilk gün başlar.", source: "PuzzleSubs", date: 1665867600000 },
          { name: "Soccer's 'Zero'", description: "İlk seçim, Beşinci Binadaki V, W, X, Y ve Z'den oluşan beş takımın katıldığı, sadece en iyi iki takımın ilerlemeye hak kazandığı, round-robin turnuvasıdır. Isagi'nin en düşük sıralamadaki takımı olan Z Takımı, X Takımına karşı oynuyor. Ancak takımın en skorer oyuncusunun bir sonraki bölüme geçmesine izin veren özel kural nedeniyle maç, takımlardan bağımsız olarak kaotik bir top kapışmalarına dönüşüyor. Oyunun akışını değiştiren kişi X Takımının müthiş forvet oyuncusu Barou Shoei'ydi.", source: "PuzzleSubs", date: 1666472400000 },
          { name: "Premonition And Intuition", description: "Z Takımı, hücum oyununu egoist ama yetenekli Barou'nun etrafında merkezleyen X Takımı tarafından ezildi. Ego'nun 'bir silah alma' isteğine yanıt veren oyuncular, bir sonraki maça hazırlanırken silahlarının ne olduğunu tartışıyorlar. Ancak Isagi bunun ne olduğunu tanımlamakta zorlanır. X Takımına karşı oynanan maçta hissettiği 'golün kokusunu' ipucu olarak kullanan Isagi ve diğerleri, bir sonraki maçta Y Takımına karşı çıkıyor.", source: "PuzzleSubs", date: 1666990800000 },
          { name: "The One to Be Born", description: "Isagi, hamle yapmak için 'kalenin kokusuna', yani ham içgüdülerine güvenir ve bu, Y Takımı'nın oyun kurucusu Niko Ikki ile birbirlerinin elini 'okuma' konusunda şiddetli bir mücadeleye yol açar. Tüm sahayı kollayan ve birbirlerine egolarını fırlatan Isagi ve Niko'nun mücadelesi onları maçın son dakikasına getirir. Isagi ve Team Z, Niko'nun son stratejisi olan 'Tek Seferlik Öldürme Sayacı'nı yenebilecek mi?", source: "PuzzleSubs", date: 1667595600000 },
          { name: "I'm Sorry", description: "Y Takımı ile yapılan maçın ardından Isagi'nin sıralaması yükseldi ve takımın merkezi haline geldi. Bir sonraki maç Wanima ikizlerinin liderliğindeki Takım W ile oynanacak. Göz teması ve kusursuz kombinasyonlarını yenmek zordur. Chigiri Hyoma ile aynı takımda oynuyorlardı ve geçmişteki travmasını onu kışkırtmak için kullanıyorlardı. Chigiri, futbolu bırakmak için bir neden bulmak amacıyla Blue Lock'a katıldığını söylüyor. Z Takımı Kuon'un oyunuyla oyunu yönetiyor. Herkes maça iyi bir başlangıç ​​yaptığı için mutludur ama Isagi bir şeylerin yolunda gitmediğini hisseder.", source: "PuzzleSubs", date: 1668286800000 },
          { name: "Rush", description: "Kuon'un ihaneti nedeniyle Z Takımı, rakibin silahları ve stratejileri hakkında her şeyi bildiği 12'ye 10 oynamak gibi çaresiz bir durumla karşı karşıya kalır. Böyle bir durumda bile Z Takımı mücadeleden vazgeçmiyor ve Isagi kendine inanmaya devam ediyor. Onların tutkusundan ilham alan Chigiri, silahını mühürleyerek sahada inanılmaz bir hızla koşuyor. Maç 3-4 yenilirken egosu sallanıyor.", source: "PuzzleSubs", date: 1668891600000 },
          { name: "The Formula for Goals", description: "Z takımının oynayacak tek bir maçı kaldı ve üyelerinin geleceğine karar verecek. Herkes başlama vuruşu konusunda gergin görünürken Isagi kimsenin yardımı olmadan gol atmanın bir yolunu bulmaya çalışıyor.", source: "PuzzleSubs", date: 1669496400000 },
          { name: "Awekening", description: "Maç, Z Takımı'nın Nagi'nin yeteneklerinden korkmasına neden olmaya devam ediyor. Ancak üyelerden biri bir futbol dehasıyla karşı karşıya olmasına rağmen korkmuyor...?", source: "PuzzleSubs", date: 1670101200000 },
          { name: "Just the Way It Is", description: "Her oyuncu silahını ve egosunu ortaya çıkardı ve Z Takımı beraberliği yakaladı. Oyunun momentumuna tamamen sahipler ama bu, Team V'in canavarı Nagi'yi uyandırdı. Uyanışa verilen zincirleme reaksiyonda Isagi de silahını kullanmayı öğrenir ve savaşmaya devam eder. Her iki takımın ego çatışmasının yarattığı “ısı” Kuon'u da etkilemeye başlar.", source: "PuzzleSubs", date: 1670706000000 },
          { name: "The Final Piece", description: "Pek çok ayrılmanın ardından Blue Lock projesi ikinci seçime giriyor. Baş döndürücü bir hızla eski dostların rakip, eski düşmanların ise müttefik haline geldiği sert bir ikinci seçim. Orada Isagi, şimdiye kadarki en güçlü egoist, dahi Itoshi Sae'nin küçük kardeşi ve Blue Lock sıralamasındaki yeni TOP rütbeli Rin ile tanışır. Daha fazla gelişme arayışında olan Isagi'nin mücadelesi yeni bir aşamaya ilerler.", source: "PuzzleSubs", date: 1668718800000 },
        ],
        [
          { name: "Tryouts", description: "Blue Lock'ta 2. seçimden sonra 35 ileri oyuncu kaldı. Üç hafta içinde Japonya'nın U-20 takımına karşı oynayacağı büyük maçla Ego, takımın en iyi 6 oyuncu etrafında toplanacağını duyurdu. Geri kalan pozisyonlar için seçmeler başlıyor.", source: "tranimeizle.co", date: 1728075600000 },
          { name: "The Assassin and the Ninja", description: "Rin ve Shidou'nun ne kadar uyumsuz olduğunu gören Isagi, bundan yararlanmayı umuyor. Ancak fiziksel yetenekleri onu olması gereken yere götürmeye yetmiyor. Daha sonra Hiori, Isagi'nin düşünmeyi refleks üzerine yapmasını öneriyor.", source: "SeiCode Subs", date: 1728680400000 },
          { name: "The World You Feel", description: "Isagi geriye dönüp refleksle gol attığında ne yaptığını analiz ediyor. Ardından ikinci maç başladığında Reo yeni oyun tarzını bulur: Bukalemun.", source: "SeiCode Subs", date: 1729285200000 },
          { name: "Chameleon", description: "Şu anda açıklama bulunmuyor. Bunun için özür dileriz.", source: "SeiCode Subs", date: 1729890000000 },
          { name: "The Big Stage", description: "Şu anda açıklama bulunmuyor. Bunun için özür dileriz.", source: "SeiCode Subs", date: 1731099600000 },
          { name: "Itoshi Sae", description: "Şu anda açıklama bulunmuyor. Bunun için özür dileriz.", source: "SeiCode Subs", date: 1731704400000 },
        ],
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