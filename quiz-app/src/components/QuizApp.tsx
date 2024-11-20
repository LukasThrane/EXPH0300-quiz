import { useState, useEffect, useRef } from "react";
import { FiSettings } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { Helmet } from "react-helmet";
import questionsAndAnswers, {
  QuestionAndAnswer,
} from "../assets/questions_data";
import "./QuizApp.css";

function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<
    QuestionAndAnswer[]
  >([]);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isShowAllOpen, setIsShowAllOpen] = useState(false);

  // Ref to detect clicks outside of options dropdown
  const optionsRef = useRef<HTMLDivElement>(null);

  // Initialize shuffledQuestions on component mount
  useEffect(() => {
    setShuffledQuestions(shuffleArray([...questionsAndAnswers]));
  }, []);

  // Function to shuffle an array using Fisher-Yates algorithm
  const shuffleArray = (array: QuestionAndAnswer[]): QuestionAndAnswer[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Determine the list of questions based on shuffle mode
  const displayedQuestions = isShuffle
    ? shuffledQuestions
    : questionsAndAnswers;

  const handleNext = () => {
    // Hide the current answer
    setShowAnswer(false);

    // Update to the next question
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex + 1 < displayedQuestions.length ? prevIndex + 1 : 0
    );
  };

  const handleBack = () => {
    // Hide the current answer
    setShowAnswer(false);

    // Update to the previous question
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : displayedQuestions.length - 1
    );
  };

  const toggleShuffle = () => {
    const newShuffleState = !isShuffle;
    setIsShuffle(newShuffleState);
    setShowAnswer(false);
    setCurrentQuestionIndex(0);
    if (newShuffleState) {
      setShuffledQuestions(shuffleArray([...questionsAndAnswers]));
    }
    setIsOptionsOpen(false);
  };

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const toggleShowAll = () => {
    setIsShowAllOpen(!isShowAllOpen);
    setIsOptionsOpen(false);
  };

  // Close the options dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOptionsOpen &&
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        setIsOptionsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOptionsOpen]);

  return (
    <div className="quiz-container">
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Exphil Quiz - Test Din Kunnskap i EXPH0300</title>
        <meta
          name="description"
          content="Test din kunnskap i EXPH0300 - Examen Philosophicum med vår interaktive Quiz App. Perfekt for læring, repetisjon og eksamensforberedelse."
        />
        <meta
          name="keywords"
          content="ExPH0300, Examen Philosophicum, Quiz App, Vitenskapsteori, Etikk, Bærekraft, Kunnskapstest, Filosofi, Naturvitenskap, Teknologi, Studentverktøy, Læringsverktøy"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Exphil Quiz - Test Din Kunnskap i EXPH0300"
        />
        <meta
          property="og:description"
          content="Test din kunnskap i EXPH0300 - Examen Philosophicum med vår interaktive Quiz App. Perfekt for læring, repetisjon og eksamensforberedelse."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://din-quiz-app-url.com" />
        <meta
          property="og:image"
          content="https://din-quiz-app-url.com/images/quiz-og.jpg"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Exphil Quiz - Test Din Kunnskap i EXPH0300"
        />
        <meta
          name="twitter:description"
          content="Test din kunnskap i EXPH0300 - Examen Philosophicum med vår interaktive Quiz App. Perfekt for læring, repetisjon og eksamensforberedelse."
        />
        <meta
          name="twitter:image"
          content="https://din-quiz-app-url.com/images/quiz-og.jpg"
        />

        {/* Structured Data for Quiz */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Examen Philosophicum Quiz App",
              "description": "Interaktiv Quiz App designet for EXPH0300 - Examen Philosophicum ved NTNU, fokusert på vitenskapsteori, etikk og bærekraft.",
              "url": "https://din-quiz-app-url.com",
              "sameAs": [
                "https://www.facebook.com/din-quiz-app",
                "https://www.twitter.com/din-quiz-app",
                "https://www.linkedin.com/company/din-quiz-app"
              ],
              "applicationCategory": "EducationalApplication",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "NOK"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Header */}
      <h1>Exphil Quiz</h1>

      {/* Options Gear Icon */}
      <div className="options-container" ref={optionsRef}>
        <button
          className="options-button"
          onClick={toggleOptions}
          aria-label="Åpne alternativer"
        >
          <FiSettings size={24} />
        </button>
        {isOptionsOpen && (
          <div className="options-dropdown">
            <button onClick={toggleShuffle}>
              {isShuffle ? "Deaktiver Shuffle" : "Aktiver Shuffle"}
            </button>
            <button onClick={toggleShowAll}>
              {isShowAllOpen ? "Skjul alle" : "Vis alle spørsmål og svar"}
            </button>
          </div>
        )}
      </div>

      {/* Question Section */}
      <div className="question-section">
        <h2>
          Spørsmål {currentQuestionIndex + 1} av {displayedQuestions.length}
        </h2>
        <p>{displayedQuestions[currentQuestionIndex].question}</p>
      </div>

      {/* Answer Section */}
      <div className={`answer-section ${showAnswer ? "visible" : ""}`}>
        <p>
          <strong>Svar:</strong>{" "}
          {displayedQuestions[currentQuestionIndex].answer}
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="buttons">
        <button
          onClick={handleBack}
          disabled={!isShuffle && currentQuestionIndex === 0}
          aria-label="Gå til forrige spørsmål"
        >
          Tilbake
        </button>
        <button onClick={() => setShowAnswer(true)} aria-label="Vis svar">
          Vis svar
        </button>
        <button onClick={handleNext} aria-label="Gå til neste spørsmål">
          Neste spørsmål
        </button>
      </div>

      {/* Show All Modal */}
      {isShowAllOpen && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal">
            <button
              className="close-button"
              onClick={toggleShowAll}
              aria-label="Lukk modal"
            >
              <AiOutlineClose size={20} />
            </button>
            <h2 id="modal-title">Alle Spørsmål og Svar</h2>
            <ul className="all-qa-list">
              {questionsAndAnswers.map((qa, index) => (
                <li key={index}>
                  <strong>Spørsmål {index + 1}:</strong> {qa.question}
                  <br />
                  <strong>Svar:</strong> {qa.answer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Progress Indicator */}
      <div className="progress">
        {isShuffle ? "Shuffle Mode" : "Sequential Mode"}
      </div>
    </div>
  );
}

export default QuizApp;
