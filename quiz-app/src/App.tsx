import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuizApp from "./components/QuizApp";
import About from "./components/About";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <Router>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Quiz App",
              "description": "En interaktiv quiz-app for å teste og forbedre din kunnskap innen ulike emner.",
              "url": "https://din-quiz-app-url.com",
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
      <div className="app-container">
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Quiz</Link>
            </li>
            <li>
              <Link to="/about">Info</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<QuizApp />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
