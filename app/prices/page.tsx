import type { Metadata } from "next";
import ListItem from "../components/ListItem";
import SiteHeader from "../components/SiteHeader";

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
            <ListItem
              title="Dagspass"
              rows={[
                { title: "Vuxen", value: "90kr" },
                { title: "Student", value: "70kr" },
                { title: "Barn under 10", value: "60kr" },
              ]}
              divider
            />
            <ListItem
              title="10-kort"
              rows={[
                { title: "Vuxen", value: "700kr" },
                { title: "Student", value: "500kr" },
                { title: "Barn under 10", value: "400kr" },
              ]}
              divider
            />
            <ListItem
              title="Månadskort"
              rows={[
                { title: "Vuxen", value: "400kr" },
                { title: "Student", value: "350kr" },
                { title: "Barn under 10", value: "300kr" },
              ]}
              divider
            />
          </div>
          <div className="priceCol">
            <ListItem
              title="Yogaklasser"
              rows={[{ title: "klass", value: "90kr" }]}
              divider
              longText={
                <>
                  Yogaklasser ingår i månadskort, 10-kort, och prova-på-veckan.
                  <br />
                  <br />
                  Kolla vårat utbud av yogaklasser
                </>
              }
            />
            <ListItem
              title="Hyra utrustning"
              rows={[
                { title: "Skor", value: "40kr" },
                { title: "Sele", value: "30kr" },
                { title: "Repbroms", value: "20kr" },
                { title: "Kalk", value: "15kr" },
              ]}
              divider
              longText="Skor och kalk ingår i månadskort, 10-kort, och prova-på-veckan."
            />
          </div>
          <div className="priceCol">
            <ListItem
              title="Villkor"
              divider
              longText={
                <>
                  Månadskortet betalas med autogiro och löper tills du säger upp
                  det. Uppsägningstiden är en månad och du gör det i receptionen
                  eller via mejl. 10-kortet är giltigt i två år från köpet och går
                  att dela med vem du vill.
                  <br />
                  <br />
                  Studentpris gäller mot giltigt studentkort. Från 14 år klättrar
                  du på egen hand, yngre än så i sällskap av en vuxen. Alla som
                  klättrar hos oss gör det på eget ansvar och följer hallens
                  ordningsregler, som du får en genomgång av första gången du
                  kommer.
                </>
              }
            />

            <ListItem
              title="Prova-på-vecka"
              longText={
                <>
                  249 kr för sju dagar obegränsad klättring. Skor, kalk och
                  yogaklasser ingår, och du får en introduktion med någon ur
                  personalen den första dagen.
                  <br />
                  <br />
                  Bestämmer du dig för ett månadskort innan veckan är slut drar vi
                  av hela summan från första månaden. Prova-på-veckan kan köpas en
                  gång per person.
                </>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
