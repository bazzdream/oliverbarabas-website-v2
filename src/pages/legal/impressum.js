import React from "react";
import { Container } from "theme-ui";

import Layout from "gatsby-theme-musician/src/components/layout";
import SEO from "gatsby-theme-musician/src/components/seo";
import Obfuscate from "react-obfuscate";

const ImprintPage = () => (
  <Layout>
    <SEO pageTitle="Impressum" />
    <Container style={{ padding: "15px" }}>
      <h2>Impressum</h2>
      <p>
        Online-Impressum.de<br />
        Creator: WalkingDadTv - Oliver Barabas<br />
        Europaring 90<br />
        53757 Sankt Augustin<br />
        <Obfuscate
          email="walkingdadtv@gmail.com"
          style={{ color: "inherit" }}
        /><br />
        Tel: +49 176 61146869
      </p>
      <br />
      <br />
      <h2>Disclaimer – rechtliche Hinweise</h2>
      § 1 Warnhinweis zu Inhalten
      <br />
      Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit
      größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt
      jedoch keine Gewähr für die Richtigkeit und Aktualität der
      bereitgestellten kostenlosen und frei zugänglichen journalistischen
      Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die
      Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters
      wieder. Allein durch den Aufruf der kostenlosen und frei zugänglichen
      Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem
      Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des
      Anbieters.
      <br />
      <br />
      § 2 Externe Links
      <br />
      Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links").
      Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der
      Anbieter hat bei der erstmaligen Verknüpfung der externen Links die
      fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen.
      Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat
      keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die
      Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet
      nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden
      Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für
      den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei
      Kenntnis von Rechtsverstößen werden jedoch derartige externe Links
      unverzüglich gelöscht.
      <br />
      <br />
      § 3 Urheber- und Leistungsschutzrechte
      <br />
      Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen
      Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und
      Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen
      schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers.
      Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung,
      Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken
      oder anderen elektronischen Medien und Systemen. Inhalte und Rechte
      Dritter sind dabei als solche gekennzeichnet. Die unerlaubte
      Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten
      ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und
      Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch
      ist erlaubt.
      <br />
      <br />
      Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher
      Erlaubnis zulässig.
      <br />
      <br />
      § 4 Besondere Nutzungsbedingungen
      <br />
      Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den
      vorgenannten Paragraphen abweichen, wird an entsprechender Stelle
      ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen
      Einzelfall die besonderen Nutzungsbedingungen.
      <p>
        Quelle:{" "}
        <a
          href="https://www.juraforum.de/impressum-generator/"
          target="blank"
          rel="external nofollow noopener noreferrer"
          style={{ color: "inherit" }}
        >
          Impressum Muster von JuraForum.de
        </a>
      </p>
    </Container>
  </Layout>
);

export default ImprintPage;
