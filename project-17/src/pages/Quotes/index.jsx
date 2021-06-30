import React from "react";
import QuotesList from "../../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Guidotti", text: "Learning React is fun" },
  { id: "q2", author: "John", text: "Learning React is great!" },
];

const Quotes = () => {
  return <QuotesList quotes={DUMMY_QUOTES} />;
};

export default Quotes;
