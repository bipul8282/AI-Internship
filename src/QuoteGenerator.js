import React, { useState } from "react";
import { quotes } from "./quotes";
import "./Q.css";

function QuoteGenerator() {
  const [quote, setQuote] = useState({
    quote: "",
  });
  const [savedStories, setSavedStories] = useState([]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const saveQuote = () => {
    if (quote.quote) {
      setSavedStories([...savedStories, quote]);
    }
  };

  const shareQuote = () => {
    
    if (navigator.share) {
      navigator.share({
        title: "Random Story",
        text: quote.quote,
      })
        .then(() => console.log("Story shared successfully"))
        .catch((error) => console.error("Error sharing story:", error));
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  return (
    <div className="container">
      <h1>Random Story Generator</h1>
      <div className="quote">
        <p className={quote.quote ? 'show' : ''}>{quote.quote}</p>
      </div>
      <div className="buttons">
        <button onClick={generateQuote}>New Story</button>
        <button onClick={saveQuote}>Save Story</button>
        <button onClick={shareQuote}>Share Story</button>
      </div>
      <div className="saved-stories">
        <h2>Saved Stories</h2>
        {savedStories.map((story, index) => (
          <div key={index}>
            <p>{story.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuoteGenerator;
