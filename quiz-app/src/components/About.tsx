import { Helmet } from "react-helmet";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <Helmet>
        <title>Om Exphil Quiz - Din Ultimate Quiz App for EXPH0300</title>
        <meta
          name="description"
          content="Oppdag hvordan vår Exphil Quiz App støtter deg i EXPH0300 - Examen Philosophicum ved NTNU, med fokus på vitenskapsteori, etikk og bærekraft."
        />
        <meta
          name="keywords"
          content="EXPH0300, Examen Philosophicum, Quiz App, Vitenskapsteori, Etikk, Bærekraft, Kunnskapstest, Filosofi, Naturvitenskap, Teknologi, Studentverktøy, Læringsverktøy, Quizlet, Quiz, Exphil"
        />
        <meta
          property="og:title"
          content="Om Exphil Quiz - Din Ultimate Quiz App for EXPH0300"
        />
        <meta
          property="og:description"
          content="Oppdag hvordan vår Exphil Quiz App støtter deg i EXPH0300 - Examen Philosophicum ved NTNU, med fokus på vitenskapsteori, etikk og bærekraft."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://din-quiz-app-url.com/about" />
        <meta
          property="og:image"
          content="https://din-quiz-app-url.com/images/quiz-og.jpg"
        />
      </Helmet>
      <h1>Om Exphil Quiz</h1>

      <section>
        <h2>!!! VIKTIG !!!</h2>
        <p>
          <strong>Denne siden er ikke laget i samarbeid med NTNU</strong>
        </p>
        <p>Alt under er gpt for SEO.</p>
      </section>

      <section>
        <h2>Formålet med Quizen</h2>
        <p>
          <strong>Exphil Quiz</strong> er utviklet som et pedagogisk verktøy for
          studenter som deltar i{" "}
          <strong>
            EXPH0300 - Examen Philosophicum for Naturvitenskap og Teknologi
          </strong>{" "}
          ved <strong>NTNU</strong>. Målet med quizen er å hjelpe deg med å
          teste og styrke din forståelse av viktige temaer som vitenskapsteori,
          etikk, politisk filosofi og bærekraft. Er basically quizlet, men
          bedre.
        </p>
      </section>

      <section>
        <h2>Kursinformasjon</h2>
        <p>
          <strong>EXPH0300</strong> gir en introduksjon til sentrale
          problemstillinger innen kunnskaps- og vitenskapsteori, etikk og
          politisk filosofi. Kurset utforsker ulike perspektiver på natur,
          menneske og teknologi, samt forholdet mellom individ og samfunn.
          Gjennom dialog- og diskusjonsbasert undervisning utvikler du evnen til
          kritisk tenkning, argumentasjon og faglig samarbeid.
        </p>
        <p>
          For mer informasjon om kurset, besøk den offisielle{" "}
          <a href="https://www.ntnu.no/studier/emner/EXPH0300#tab=omEmnet">
            NTNU-siden for EXPH0300
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Læringsutbytte</h2>
        <p>
          Ved å bruke <strong>Exphil Quiz</strong> vil du:
        </p>
        <ul>
          <li>Teste din kunnskap om vitenskapsteori og etikk.</li>
          <li>Forstå og anvende viktige begreper og teorier fra kurset.</li>
          <li>Reflektere kritisk over bærekraft og samfunnsutvikling.</li>
          <li>
            Forbedre dine ferdigheter i argumentasjon og kritisk tenkning.
          </li>
        </ul>
      </section>

      <section>
        <h2>Bruk av Quizen</h2>
        <p>
          <strong>Exphil Quiz</strong> tilbyr flere funksjoner som er designet
          for å forbedre din læringsopplevelse:
        </p>
        <ul>
          <li>
            <strong>Shuffle Mode:</strong> Varier spørsmålene for en dynamisk
            quiz-opplevelse hver gang du tar testen.
          </li>
          <li>
            <strong>Vis Alle Spørsmål og Svar:</strong> Gå gjennom alle
            spørsmålene og deres respektive svar for grundig forståelse og
            repetisjon.
          </li>
          <li>
            <strong>Interaktiv Læring:</strong> Engasjer deg i en interaktiv
            læringsprosess som fremmer bedre forståelse og retensjon av
            kunnskap.
          </li>
        </ul>
      </section>

      <section>
        <h2>Hvorfor Velge Exphil Quiz?</h2>
        <p>
          Vår Quiz App er spesielt utviklet for å møte behovene til studenter i{" "}
          <strong>EXPH0300</strong>. Ved å bruke quizen får du:
        </p>
        <ul>
          <li>En effektiv måte å forberede deg til eksamen på.</li>
          <li>
            Muligheten til å identifisere områder hvor du trenger mer fokus.
          </li>
          <li>En fleksibel læringsplattform som kan tilpasses dine behov.</li>
        </ul>
      </section>

      <section>
        <h2>Fremtidige Utvidelser</h2>
        <p>
          Vi planlegger kontinuerlig å forbedre <strong>Exphil Quiz</strong> ved
          å:
        </p>
        <ul>
          <li>
            Legge til flere spørsmål og emner basert på kursoppdateringer.
          </li>
          <li>
            Implementere en poeng- og rangering system for å motivere studenter.
          </li>
          <li>
            Integrere funksjoner som tidsbegrensede quizzer for økt utfordring.
          </li>
          <li>Forbedre tilgjengeligheten for å støtte alle studenter.</li>
        </ul>
      </section>

      <section>
        <h2>Kontakt Oss</h2>
        <p>
          Har du spørsmål, forslag eller tilbakemeldinger? Ta gjerne kontakt med
          oss gjennom emnets Blackboardsider.
        </p>
      </section>
    </div>
  );
}

export default About;
