import React from "react";
import QuoteGenerator from "./QuoteGenerator";
import SavedStories from "./SavedStories";
import "./App.css"

function App() {
  return (
    <div>
      <QuoteGenerator />
      <SavedStories stories={[] /* Pass your saved stories state here */} />
    </div>
  );
}

export default App;
