import React from "react";
import QuotesForm from "../../components/quotes/QuoteForm";

const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };

  return <QuotesForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
