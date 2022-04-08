import "./consultants.css";
import Nav from "../../components/navbar/navbar";
import LiElem from "../../components/el1/liElem";
import Sanjarbek from "./img/1.png";
import Abdulaziz from "./img/2.png";
import Islombek from "./img/3.png";
import Dilmurod from "./img/4.png";
import Bositjon from "./img/5.png";
import Mirzohid from "./img/6.png";
import Axmadali from "./img/7.png";
import Amirbek from "./img/8.png";
import Jasurbek from "./img/9.png";
import Akbarbek from "./img/10.png";
import Asror from "./img/11.png";
import Otkirbek from "./img/12.png";
const consultants = () => {
  return (
    <>
      <Nav />
      <section className="consultants_section">
        <div className="container">
          <div className="consultants_section_div_one">
            <ul className="consultants_section_list">
              <LiElem
                img={Sanjarbek}
                name="Saparov Sanjarbek Yusupboyevich"
                position="TKTI 'Neft-gazni qayta ishlash kimyoviy texnologiyasi' kafedrasi dotsenti"
                One="Tel: +998977662529"
                two="e-mail: World_707@mail.ru"
              />
              <LiElem
                img={Abdulaziz}
                name="Sidikov Abdulaziz Abdumanop o'g'li"
                position="O'zR FA Umumiy va noorganik kimyo instituti, katta ilmiy xodimi"
                One="TDAU dotsenti, texnika fanlar falsafa doktori (PhD)"
                two="Tel: +998 909857288"
                three="e-mail: sidikov.abdulaziz@mail.ru"
              />
              <LiElem
                img={Islombek}
                name="Miyassarov Islombek Mag'rip o'g'li"
                One="O'zR FA Umumiy va noorganik kimyo instituti, katta ilmiy hodim"
                two="Tel: +998939911699"
                three="e-mail: future_monster@mail.ru"
              />
              <LiElem
                img={Dilmurod}
                name="Mahkamov Dilmurod Umid o'g'li"
                position='Texnik jihatdan tartibga solish agentligi qoshidagi "UzTest" DM mutaxassisi'
                One="Tel: +998935406959"
              />
            </ul>
          </div>
          <div className="consultants_section_div_two">
            <ul className="consultants_section_list">
              <LiElem
                img={Bositjon}
                name="Tolibov Bositjon Orifjon o'g'li"
                position='OOO "Toshkent Test Sertifikatlashtirish"  '
                One="Bosh mutaxassis"
                two="Tel: +998946492374"
                three="gmail: tolibovbositjon@gmail.com"
              />
              <LiElem
                img={Mirzohid}
                name="Abdirahimov Mirzohid Ibroximjon o‘g‘li"
                position="Sileziya Texnologiya Universiteti"
                One="Tayanch doktoranti"
                two="Tel: +998911638687"
              />
              <LiElem
                img={Axmadali}
                name="Xudoyberdiyev Axmadali Itolmas o'g'li"
                position='TKTI "Yuqori molekulali birikmalar va plastmassalar texnologiyasi" kafedrasi assistenti'
                One="Tel: +998911566633"
                two="e-mail: axmadali.xudoyberdiyev.93@mail.ru"
              />
              <LiElem
                img={Amirbek}
                name="Ураков Амирбек Улугбекович"
                position="Enter Engineering"
                One="Ведущий специалист по закупкам и поставкам"
                two="Тел: +998 93 808 25 63"
                three="email: amirbek.urakov@mail.ru"
              />
            </ul>
          </div>
          <div className="consultants_section_div_three">
            <ul className="consultants_section_list">
              <LiElem
                img={Jasurbek}
                name="Qayumov Jasurbek Saydullayevich"
                position="Uzbekistan GTL kompaniyasi. Sintetik gaz ishlab chiqarish sexi"
                One="3 toifali texnologik qurilmalar kuzatuvchisi"
                two="Tel: +998916360611"
                three="e-mail: Jasurbek.Qayumov@uzgtl.com"
              />
              <LiElem
                img={Akbarbek}
                name="Bekmirzayev Akbarbek Shuxratovich"
                position="TKTI, Noorganik, analitik, fizikaviy va kolloid kimyo kafedrasi tayanch doktoranti"
                One="Tel: +99897 724 26 27"
                two="e-mail: akbarkimtex@gmail.com"
              />
              <LiElem
                img={Asror}
                name="Mardonov Asror Hasanovich"
                position='Toshkent kimyo-texnologiya instituti "Sellyuloza-yog‘ochsozlik texnologiyasi" kafedrasi tayanch doktoranti'
                One="Tel: +998901167817"
                two="e-mail: asror_mardonov@mail.ru"
              />
              <LiElem
                img={Otkirbek}
                name="Azamatov O'tkirbek Rashidovich"
                position="Toshkent kimyo-texnologiya instituti Katta o'qituvchi"
                One="Tel: 998977285733"
                two="-mail: aor5@inbox.ru"
              />
            </ul>
          </div>
          <ul className="consultants_section_list"></ul>
        </div>
      </section>
    </>
  );
};

export default consultants;
