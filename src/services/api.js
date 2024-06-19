import { Observable, of } from 'rxjs';

export const fetchStands = () => {
  return new Observable(observer => {
    setTimeout(() => {
      const stands = [
        // STARDUST CRUZADERS
        {
          "id": 1,
          "name": "The World",
          "japaneseName": "ザ・ワールド(世界)",
          "image": "https://static.jojowiki.com/images/f/f5/latest/20210424162912/The_World_Infobox_Manga.png",
          "chapter": "Stardust Crusaders, Steel Ball Run",
          "abilities": "Time Stop, Super Speed, Super Strength",
        },
        {
          "id": 2,
          "name": "Hermit Purple",
          "japaneseName": "ハーミットパープル（隠者の紫)",
          "image": "https://static.jojowiki.com/images/c/c1/latest/20191015212906/Hermit_Purple_SC_Infobox_Manga.png",
          "chapter": "Stardust Crusaders",
          "abilities": "Transmit Messages, Grappling, Creating Images",
        },
        {
          "id": 3,
          "name": "Star Platinum",
          "japaneseName": "スタープラチナ（星の白金)",
          "image": "https://static.jojowiki.com/images/3/36/latest/20191015215010/Star_Platinum_DU_Infobox_Manga.png",
          "chapter": "Stardust Crusaders, Diamond Is Unbreakable, Stone Ocean",
          "abilities": "Time Stop, Super Speed, Super Strength, Breath, Star-Finger",
        },
        {
          "id": 4,
          "name": "Magician's Red",
          "japaneseName": "マジシャンズレッド（魔術師の赤)",
          "image": "https://static.jojowiki.com/images/5/56/latest/20210529144745/Magician%27s_Red_Infobox_Manga.png",
          "chapter": "Stardust Crusaders",
          "abilities": "Pyrokinesis, Super Strength, Super Speed, Cross Fire Hurricane, Red Bind, Life Detector"
        },
        {
          "id": 5,
          "name": "Hierophant Green",
          "japaneseName": "ハイエロファントグリーン（法皇の緑)",
          "image": "https://i.pinimg.com/originals/9d/a5/84/9da584ccb825909027f5be823042e403.png",
          "chapter": "Stardust Crusaders",
          "abilities": "Coiled Body, Marionette Controll, Emerald Splash"
        },
        {
          "id": 6,
          "name": "Silver Chariot",
          "japaneseName": "シルバーチャリオッツ（銀の戦車)",
          "image": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=1200,height=675/catalog/crunchyroll/df3e396f1d84a92f34d857bdbf94741a.jpe",
          "chapter": "Stardust Crusaders, Vento Aureo",
          "abilities": "Speed, Power, Precision, Armor, Sword Shot"
        },
        {
          "id": 7,
          "name": "The Fool",
          "japaneseName": "ザ・フール（愚者)",
          "image": "https://static.jojowiki.com/images/thumb/1/10/latest/20210312225357/The_Fool_Infobox_Anime.png/400px-The_Fool_Infobox_Anime.png",
          "chapter": "Stardust Crusaders",
          "abilities": "Sand Manifestation, Shapeshifting"
        },
        {
          "id": 8,
          "name": "Justice",
          "japaneseName": "ジャスティス（正義）",
          "image": "https://static.jojowiki.com/images/thumb/f/f8/latest/20191015215013/Justice_Infobox_Manga.png/600px-Justice_Infobox_Manga.png",
          "chapter": "Stardust Crusaders",
          "abilities": "Fog String Puppetry, Illusions"
        },
        {
          "id": 9,
          "name": "Cream",
          "japaneseName": "クリーム",
          "image": "https://static.jojowiki.com/images/thumb/0/0c/latest/20191015214713/Cream_Infobox_Manga.png/600px-Cream_Infobox_Manga.png",
          "chapter": "Stardust Crusaders",
          "abilities": "Void"
        },
        {
          "id": 10,
          "name": "Horus",
          "japaneseName": "ホルス神",
          "image": "https://static.jojowiki.com/images/5/59/latest/20191015214708/Horus_Infobox_Manga.png",
          "chapter": "Stardust Crusaders",
          "abilities": "Cryokinesis"
        },
        // DIAMOND IS UNBREAKABLE
        {
          "id": 11,
          "name": "Crazy Diamond",
          "japaneseName": "クレイジー・ダイヤモンド",
          "image": "https://static.jojowiki.com/images/thumb/c/c5/latest/20200625184236/Crazy_Diamond_Infobox_Manga.png/600px-Crazy_Diamond_Infobox_Manga.png",
          "chapter": "Diamond is Unbreakable",
          "abilities": "Super Strength, Super Speed, Precision, Restoration"
        },
        {
          "id": 12,
          "name": "The Hand",
          "japaneseName": "ザ・ハンド",
          "image": "https://static.jojowiki.com/images/thumb/2/20/latest/20191015213258/The_Hand_Infobox_Manga.png/600px-The_Hand_Infobox_Manga.png",
          "chapter": "Diamond is Unbreakable",
          "abilities": "Erasure"
        },
        {
          "id": 13,
          "name": "The Lock",
          "japaneseName": "ザ・ロック",
          "image": "https://static.jojowiki.com/images/7/77/latest/20191015213431/The_Lock_Infobox_Manga.png",
          "chapter": "Diamond is Unbreakable",
          "abilities": "Guilt Amplification"
        },
        {
          "id": 14,
          "name": "Surface",
          "japaneseName": "サーフィス",
          "image": "https://static.jojowiki.com/images/d/d6/latest/20191015214033/Surface_Infobox_Manga.png",
          "chapter": "Diamond is Unbreakable",
          "abilities": "Doppelgänger Creation"
        },
        {
          "id": 15,
          "name": "Love Deluxe",
          "japaneseName": "ラブ・デラックス",
          "image": "https://static.jojowiki.com/images/thumb/9/96/latest/20191015215143/Love_Deluxe_Infobox_Manga.png/600px-Love_Deluxe_Infobox_Manga.png",
          "chapter": "Diamond is Unbreakable",
          "abilities": "Hair Manipulation"
        },
        {
          "id": 16,
          "name": "Pearl Jam",
          "japaneseName": "パール・ジャム",
          "image": "https://static.jojowiki.com/images/d/d3/latest/20191015214855/Pearl_Jam_Infobox_Manga.png",
          "chapter": "Diamond is Unbreakable",
          "abilities": "Nutritional Amplification"
        },
        {
          "id": 17,
          "name": "Achtung Baby",
          "japaneseName": "アクトン・ベイビー",
          "image": "https://static.jojowiki.com/images/b/b8/latest/20191015213252/Achtung_Baby_Infobox_Manga.png",
          "chapter": "Diamond is Unbreakable",
          "abilities": "Invisibility"
        },
        {
          "id": 18,
          "name": "Ratt",
          "japaneseName": "ラット",
          "image": "https://static.jojowiki.com/images/f/fe/latest/20220524212255/Ratt_Infobox_Manga.png",
          "chapter": "Diamond is Unbreakable",
          "abilities": "Corrosive Gel"
        },
        {
          "id": 19,
          "name": "Harvest",
          "japaneseName": "ハーヴェスト",
          "image": "https://static.jojowiki.com/images/f/f3/latest/20220429135035/Harvest_Infobox_Manga.png",
          "chapter": "Diamond is Unbreakable",
          "abilities": "Swarm Body, Searching"
        },
        {
          "id": 20,
          "name": "Cinderella",
          "japaneseName": "シンデレラ",
          "image": "https://static.jojowiki.com/images/4/45/latest/20220429135501/Cinderella_Infobox_Manga.png",
          "chapter": "Diamond is Unbreakable",
          "abilities": "Beauty Transformation"
        },
        // GOLDEN WIND
        {
          "id": 21,
          "name": "Gold Experience",
          "japaneseName": "ゴールド・エクスペリエンス",
          "image": "https://static.jojowiki.com/images/8/87/latest/20191015213612/Gold_Experience_Infobox_Manga.png",
          "chapter": "Vento Aureo",
          "abilities": "Life Grafting, Life Creation, Life Sense, Life Shot, Plant Manipulation"
        },
        {
          "id": 22,
          "name": "Sticky Fingers",
          "japaneseName": "スティッキィ・フィンガーズ",
          "image": "https://static.jojowiki.com/images/thumb/0/03/latest/20191015214132/Sticky_Fingers_Infobox_Manga.png/600px-Sticky_Fingers_Infobox_Manga.png",
          "chapter": "Vento Aureo",
          "abilities": "Zippers, Zipper Maneuverability, Disassembling, Reassembling"
        },
        {
          "id": 23,
          "name": "Moody Blues",
          "japaneseName": "ムーディー・ブルース",
          "image": "https://static.jojowiki.com/images/thumb/5/5a/latest/20191015214237/Moody_Blues_Infobox_Manga.png/600px-Moody_Blues_Infobox_Manga.png",
          "chapter": "Vento Aureo",
          "abilities": "Playback, Chronological Replay"
        },
        {
          "id": 24,
          "name": "Sex Pistols",
          "japaneseName": "セックス・ピストルズ",
          "image": "https://static.jojowiki.com/images/thumb/4/4b/latest/20191015214720/Sex_Pistols_Infobox_Manga.png/600px-Sex_Pistols_Infobox_Manga.png",
          "chapter": "Vento Aureo",
          "abilities": "Bullet Control"
        },
        {
          "id": 25,
          "name": "Aerosmith",
          "japaneseName": "エアロスミス",
          "image": "https://static.jojowiki.com/images/thumb/0/09/latest/20191015213226/Aerosmith_Infobox_Manga.png/600px-Aerosmith_Infobox_Manga.png",
          "chapter": "Vento Aureo",
          "abilities": "Automatic Tracking, Bombs"
        },
        {
          "id": 26,
          "name": "Purple Haze",
          "japaneseName": "パープル・ヘイズ",
          "image": "https://static.jojowiki.com/images/thumb/4/4e/latest/20191015214448/Purple_Haze_Infobox_Manga.png/600px-Purple_Haze_Infobox_Manga.png",
          "chapter": "Vento Aureo",
          "abilities": "Mold Spores, Deadly Venom"
        },
        {
          "id": 27,
          "name": "Green Day",
          "japaneseName": "グリーン・ディ",
          "image": "https://static.jojowiki.com/images/thumb/6/64/latest/20191015213637/Green_Day_Infobox_Manga.png/600px-Green_Day_Infobox_Manga.png",
          "chapter": "Vento Aureo",
          "abilities": "Mold Growth, Automatic Response, Acidic Ejection"
        },
        {
          "id": 28,
          "name": "King Crimson",
          "japaneseName": "キング・クリムゾン",
          "image": "https://static.jojowiki.com/images/thumb/2/29/latest/20191015213902/King_Crimson_Infobox_Manga.png/600px-King_Crimson_Infobox_Manga.png",
          "chapter": "Vento Aureo",
          "abilities": "Time Erasure, Epitaph, Teleportation"
        },
        {
          "id": 29,
          "name": "Black Sabbath",
          "japaneseName": "ブラック・サバス",
          "image": "https://static.jojowiki.com/images/thumb/2/29/latest/20191015213120/Black_Sabbath_Infobox_Manga.png/600px-Black_Sabbath_Infobox_Manga.png",
          "chapter": "Vento Aureo",
          "abilities": "Shadow Activation, Arrow-Powered Stand"
        },
        {
          "id": 30,
          "name": "White Album",
          "japaneseName": "ホワイト・アルバム",
          "image": "https://static.jojowiki.com/images/thumb/8/8c/latest/20191015215306/White_Album_Infobox_Manga.png/600px-White_Album_Infobox_Manga.png",
          "chapter": "Vento Aureo",
          "abilities": "Ice Manipulation, Cryokinesis, Gently Weeps"
        },
        // STONE OCEAN
        {
          "id": "31",
          "name": "Stone Free",
          "japaneseName": "ストーン・フリー",
          "image": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/11/stone-free.jpg",
          "chapter": "Stone Ocean",
          "abilities": "String Decomposition, String Manipulation, Speed, Strength",
        },
        {
          "id": "32",
          "name": "Kiss",
          "japaneseName": "キッス",
          "image": "https://pm1.aminoapps.com/6483/da08cc9f64fb22b71db7bbd90d79b4d3d52bdef5_00.jpg",
          "chapter": "Stone Ocean",
          "abilities": "Duplicating Stickers",
        },
        {
          "id": "33",
          "name": "Burning Down the House",
          "japaneseName": "バーニング・ダウン・ザ・ハウス",
          "image": "https://static.jojowiki.com/images/thumb/0/00/latest/20191015215502/BDtH_Infobox_Manga.png/600px-BDtH_Infobox_Manga.png",
          "chapter": "Stone Ocean",
          "abilities": "Ghost Objects, Ghost Room",
        },
        {
          "id": "34",
          "name": "Foo Fighters",
          "japaneseName": "フー・ファイターズ",
          "image": "https://64.media.tumblr.com/090e0b26d37da82996d1e4c094851339/tumblr_inline_p1z7n3ndFG1tzlo3k_500.png",
          "chapter": "Stone Ocean",
          "abilities": "Plankton Colony Form, Body Invasion, Water Control, Plankton Shot, Wound Seal",
        },
        {
          "id": "35",
          "name": "Diver Down",
          "japaneseName": "ダイバー・ダウン",
          "image": "https://pm1.aminoapps.com/6388/89530d5e094310c72ca326f8cb3008e315396bed_00.jpg",
          "chapter": "Stone Ocean",
          "abilities": "Stand Power Storage, Restructuring",
        },
        // STEEL BALL RUN
        {
          "id": "36",
          "name": "Tusk",
          "japaneseName": "タスク",
          "image": "https://static.jojowiki.com/images/thumb/c/ce/latest/20210323194311/Tusk_ACT1_SBR_Infobox_Manga.png/600px-Tusk_ACT1_SBR_Infobox_Manga.png",
          "chapter": "Steel Ball Run, Jojolion",
          "abilities": "ACT1: Spinning Nails, ACT2: Golden Rectangle Nails, ACT3: Spatial Wormhole, ACT4: Infinite Rotation",
        },
        {
          "id": "37",
          "name": "Ball Breaker",
          "japaneseName": "ボール・ブレイカー",
          "image": "https://static.wikia.nocookie.net/bf37e4a1-d71b-4756-8708-2a440cba050a/scale-to-width/755",
          "chapter": "Steel Ball Run",
          "abilities": "Golden Spin, Spin",
        },
        {
          "id": "38",
          "name": "Ticket to Ride",
          "japaneseName": "涙の乗車券",
          "image": "https://static.jojowiki.com/images/e/e7/latest/20240203231516/Ticket_to_Ride_Infobox_Manga.png",
          "chapter": "Steel Ball Run",
          "abilities": "Blade of Tears, Divine Protection",
        },
        {
          "id": "39",
          "name": "Cream Starter",
          "japaneseName": "クリーム・スターター",
          "image": "https://static.jojowiki.com/images/thumb/7/7b/latest/20240204003114/Cream_Starter_Infobox_Manga.png/600px-Cream_Starter_Infobox_Manga.png",
          "chapter": "Steel Ball Run",
          "abilities": "Flesh Spray",
        },
        {
          "id": "40",
          "name": "Oh! Lonesome Me",
          "japaneseName": "オー！ロンサム・ミー",
          "image": "https://static.jojowiki.com/images/thumb/b/b0/latest/20191015215017/Oh%21_Lonesome_Me_Infobox_Manga.png/600px-Oh%21_Lonesome_Me_Infobox_Manga.png",
          "chapter": "Steel Ball Run",
          "abilities": "Rope Transfer",
        },
        // JOJOLION
        {
          "id": "41",
          "name": "Soft & Wet",
          "japaneseName": "ソフト＆ウェット",
          "image": "https://static.wikia.nocookie.net/jjba/images/5/5b/Soft%26Wet.png/revision/latest?cb=20170522014037&path-prefix=pt-br",
          "chapter": "Jojolion",
          "abilities": "Spin, Bubble Generation, Plunder, Bomb Creation, Go Beyond",
        },
        {
          "id": "42",
          "name": "Paisley Park",
          "japaneseName": "ペイズリー・パーク",
          "image": "https://pbs.twimg.com/media/FF4eg1HXEAYgQm6.jpg:large",
          "chapter": "Jojolion",
          "abilities": "Guidance, Electronics Manipulation, Shapeshifting",
        },
        {
          "id": "43",
          "name": "Nut King Call",
          "japaneseName": "ナット・キング・コール",
          "image": "https://i.pinimg.com/originals/49/af/a0/49afa0ac593a34ff350251e2767c426a.jpg",
          "chapter": "Jojolion",
          "abilities": "Nuts and Bolts",
        },
        {
          "id": "44",
          "name": "Paper Moon King",
          "japaneseName": "ペーパー・ムーン・キング",
          "image": "https://static.jojowiki.com/images/8/8a/latest/20200819022738/Paper_Moon_King_Infobox_Manga.png",
          "chapter": "Jojolion",
          "abilities": "Living Origami, Sensory Manipulation",
        },
        // JOJOLANDS
        {
          "id": "45",
          "name": "November Rain",
          "japaneseName": "ノーヴェンバー・レイン（11月の雨）",
          "image": "https://static.wikia.nocookie.net/jojo/images/d/df/November_Rain_Stand.png/revision/latest?cb=20230216190339&path-prefix=es",
          "chapter": "Jojolands",
          "abilities": "Rain Generation, Heavy Rain",
        },
        {
          "id": "46",
          "name": "Smooth Operators",
          "japaneseName": "スムース・オペレイターズ",
          "image": "https://static.jojowiki.com/images/thumb/5/53/latest/20231219055911/Smooth_Operators_Infobox_Manga.png/600px-Smooth_Operators_Infobox_Manga.png",
          "chapter": "Jojolands",
          "abilities": "Displacement",
        },
        {
          "id": "47",
          "name": "The Mattekudasai",
          "japaneseName": "ザ・マッテクダサイ",
          "image": "https://static.jojowiki.com/images/0/02/latest/20231223060234/THE_MATTEKUDASAI_Infobox_Manga.png",
          "chapter": "Jojolands",
          "abilities": "Wish Granting Transformation",
        },
      ];

      observer.next(stands);
      observer.complete();
    }, 1000);
  });
};

