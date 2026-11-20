import type { Metadata } from "next";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = { title: "Priser - Getagrip klättergym" };

export default function Page() {
  return (
    <>
      <SiteHeader activePath="/prices" />
      <div className="below-header"></div>
      <div className="page-content">
        <h1>Prislista</h1>
        <div className="price-container">
          <div className="priceCol">
            <div className="priceBox">
              <h2>Dagspass</h2>
              <ul className="priceList">
                <li className="pricelist-item">
                  <p>Vuxen</p>
                  <p className="value">90kr</p>
                </li>
                <li className="pricelist-item">
                  <p>Student</p>
                  <p className="value">70kr</p>
                </li>
                <li className="pricelist-item">
                  <p>Barn under 10</p>
                  <p className="value">60kr</p>
                </li>
              </ul>
              <div className="line"></div>
            </div>
            <div className="priceBox">
              <h2>10-kort</h2>
              <ul className="priceList">
                <li className="pricelist-item">
                  <p>Vuxen</p>
                  <p className="value">700kr</p>
                </li>
                <li className="pricelist-item">
                  <p>Student</p>
                  <p className="value">500kr</p>
                </li>
                <li className="pricelist-item">
                  <p>Barn under 10</p>
                  <p className="value">400kr</p>
                </li>
              </ul>
              <div className="line"></div>
            </div>
            <div className="priceBox">
              <h2>Månadskort</h2>
              <ul className="priceList">
                <li className="pricelist-item">
                  <p>Vuxen</p>
                  <p className="value">400kr</p>
                </li>
                <li className="pricelist-item">
                  <p>Student</p>
                  <p className="value">350kr</p>
                </li>
                <li className="pricelist-item">
                  <p>Barn under 10</p>
                  <p className="value">300kr</p>
                </li>
              </ul>
              <div className="line"></div>
            </div>
          </div>
          <div className="priceCol">
            <div className="priceBox">
              <h2>Yogaklasser</h2>
              <ul className="priceList">
                <li className="pricelist-item">
                  <p>klass</p>
                  <p className="value">90kr</p>
                </li>
              </ul>
              <p>
                Yogaklasser ingår i månadskort, 10-kort, och prova-på-veckan.
                <br />
                <br />
                Kolla vårat utbud av yogaklasser
              </p>
              <div className="line"></div>
            </div>
            <div className="priceBox">
              <h2>Hyra utrustning</h2>
              <ul className="priceList">
                <li className="pricelist-item">
                  <p>Skor</p>
                  <p className="value">40kr</p>
                </li>
                <li className="pricelist-item">
                  <p>Sele</p>
                  <p className="value">30kr</p>
                </li>
                <li className="pricelist-item">
                  <p>Repbroms</p>
                  <p className="value">20kr</p>
                </li>
                <li className="pricelist-item">
                  <p>Kalk</p>
                  <p className="value">15kr</p>
                </li>
              </ul>
              <p>
                Skor och kalk ingår i månadskort, 10-kort, och prova-på-veckan.
              </p>

              <div className="line"></div>
            </div>
          </div>
          <div className="priceCol">
            <div className="priceBox">
              <h2>Villkor</h2>
              <p>
                Månadskortet betalas med autogiro och löper tills du säger upp
                det. Uppsägningstiden är en månad och du gör det i receptionen
                eller via mejl. 10-kortet är giltigt i två år från köpet och går
                att dela med vem du vill.
                <br />
                <br />
                Studentpris gäller mot giltigt studentkort. Från 14 år klättrar du
                på egen hand, yngre än så i sällskap av en vuxen. Alla som
                klättrar hos oss gör det på eget ansvar och följer hallens
                ordningsregler, som du får en genomgång av första gången du
                kommer.
              </p>
              <div className="line"></div>
            </div>

            <div className="priceBox">
              <h2>Prova-på-vecka</h2>
              <p>
                249 kr för sju dagar obegränsad klättring. Skor, kalk och
                yogaklasser ingår, och du får en introduktion med någon ur
                personalen den första dagen.
                <br />
                <br />
                Bestämmer du dig för ett månadskort innan veckan är slut drar vi
                av hela summan från första månaden. Prova-på-veckan kan köpas en
                gång per person.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
