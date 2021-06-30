import React from "react";
import { useHistory } from "react-router";
import QuotesForm from "../../components/quotes/QuoteForm";

const NewQuote = () => {
  const { push } = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    push("/quotes");
  };

  return <QuotesForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
