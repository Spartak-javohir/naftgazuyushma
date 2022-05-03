import DMA from "./img/DMA.png";
import Areometr from "./img/areometr.png";
import Arn from "./img/arn.png";
import Arnlab from "./img/arnlab.png";
import Astm from "./img/astm.png";
import Chaqnash from "./img/chaqnash.png";
import Dina from "./img/dina.png";
import Englar from "./img/englar.png";
import Formula from "./img/formula.png";
import Haake from "./img/haake.png";
import Koehlar from "./img/koehlar.png";
import Spek from "./img/spek.png";
import Vpj from "./img/vpj.png";
import Yopiqtigel from "./img/yopiqtigel.png";

const dbTahlil = [
  {
    id: 1,
    name: "200 C da DMA 1001 ixcham zichlik o'lchagich bilan yengil neft va neft mahsulotlarining zichligini aniqlash GOST R 57037-2016",
    number: 2,
    time: "5+4+5",
    summ: 14,
    price: 499530.6,
    pictures: DMA,
  },
  {
    id: 2,
    name: "Areometr bilan neft va neft mahsulotlarining zichligini aniqlash GOST 3900-85",
    number: 3,
    time: "2+3+5",
    summ: 10,
    price: 145744.5,
    pictures: Areometr,
  },
  {
    id: 3,
    name: "Formula bo'yicha neft va neft mahsulotlarining zichligini aniqlash GOST 8.610-2004",
    number: 2,
    time: "1+7+2",
    summ: 10,
    price: 102348.6,
    pictures: Formula,
  },
  {
    id: 4,
    name: "HAAKE Viscotester 2 plyus rotorli viskozimetr bilan o’rta va og'ir neft van neft mahsulotlarining dinamik qovushqoqligini aniqlash GOST 1929-87",
    number: 3,
    time: "2+2+2",
    summ: 6,
    price: [
      "20 С 147865.4 ",
      "40 С 172880.6 ",
      "60 С 198452.3 ",
      "80 С 244335.7 ",
      "100 С 296711.8 ",
    ],
    pictures: Haake,
  },
  {
    id: 5,
    name: "VPJ, VPJM kabi kapillyarli viskozimetrlarda neft va neft mahsulotlarining kinematik qovushqoqligini aniqlash GOST 33-66",
    number: 3,
    time: "3+5+2",
    summ: 10,
    price: ["200 С 149557.3 ", "500 С 199357.4 ", "800 С 247963.5 "],
    pictures: Vpj,
  },
  {
    id: 6,
    name: "Engler apparatida neft va neft mahsulotlarining fraksiya tarkibini aniqlash GOST 2177-66",
    number: 2,
    time: "15+25+15",
    summ: 55,
    price: ["gacha 200 С 247977.6", "dan 200 С -gacha 350 С 298798.4"],
    pictures: Englar,
  },
  {
    id: 7,
    name: "ARN Koehler K45XXX qurilmasida neft va neft mahsulotlarini fraksiyalarga ajratish GOST 11011-85",
    number: 2,
    time: "25+25+10",
    summ: 60,
    price: ["gacha 200 С 297895.5", "dan 200 С - gacha 350 С 345749.6"],
    pictures: Arn,
  },
  {
    id: 8,
    name: "ARN-LAB-11 apparatida neft va neft mahsulotlarini fraksiyalarga ajratish 0 dan 400 C gacha GOST 2177-99",
    number: 2,
    time: "20+20+20",
    summ: 60,
    price: 799369.5,
    pictures: Arnlab,
  },
  {
    id: 9,
    name: "Koehler K47900 apparatida neft va neft mahsulotlarida oltingugurtning elementar tarkibini aniqlash GOST ASTMD4294.",
    number: 2,
    time: "10+5+5",
    summ: 20,
    price: 394668.6,
    pictures: Koehlar,
  },
  {
    id: 10,
    name: "Neft va neft mahsulotlaridagi Si, Fe, Sr, Sn, Ba metallarning elementar tarkibini Koehler K47900 apparatida energiya tarqalishi bilan rentgen-fluoressensiya spektrometriyasida aniqlash GOST ASTMD4294",
    number: 2,
    time: "10+60+5",
    summ: 75,
    price: 499232.3,
    pictures: Spek,
  },
  {
    id: 11,
    name: "Dina va Starka usuli bo'yicha neft tarkibidagi suv miqdorini aniqlash GOST 2477-65",
    number: 2,
    time: "15+25+15",
    summ: 55,
    price: 296888.7,
    pictures: Dina,
  },
  {
    id: 12,
    name: "Ochiq tigelda neft van neft mahsulotlarini chaqnash haroratini aniqlash GOST 4333-2014 400 C gacha",
    number: 2,
    time: "5+30+10",
    summ: 45,
    price: 249550.8,
    pictures: Chaqnash,
  },
  {
    id: 13,
    name: "Yopiq tigelda neft va neft mahsulotlarining chaqnash haroratini aniqlash GOST 6356-75 400 C gacha",
    number: 2,
    time: "5+15+10",
    summ: 30,
    price: 249550.8,
    pictures: Yopiqtigel,
  },
  {
    id: 14,
    name: "Neft va neft mahsulotlarining qotish haroratini aniqlash ASTM D6749-02 (2018) -85 C gacha",
    number: 2,
    time: "10+20+10",
    summ: 30,
    price: 249550.8,
    pictures: Astm,
  },
  {
    id: 15,
    name: "Tahlil natijalarini tekshirish (nazorat qilish) va fizik-kimyoviy xususiyatlarini o'rganishda xulosa yozmasdan belgilangan shakldagi jadvallarga kiritish",
    number: 1,
    time: 30,
    summ: 30,
    price: 197514.4,
    pictures: "",
  },
  {
    id: 16,
    name: "Tahlil natijalari bilan jadvallarni qayta ishlash, fizik-kimyoviy xususiyatlarni o'rganish bo’yicha xulosa yozish",
    number: 2,
    time: "Englar60",
    summ: 60,
    price: 298756.5,
    pictures: "",
  },
];
export default dbTahlil;
