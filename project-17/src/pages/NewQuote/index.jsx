import React, { useEffect } from "react";
import { useHistory } from "react-router";
import QuotesForm from "../../components/quotes/QuoteForm";
import useHttp from "../../hooks/use-http";
import { addQuote } from "../../lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const { push } = useHistory();
  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  useEffect(() => {
    if (status === "completed") {
      push("/quotes");
    }
  }, [status, push]);

  return (
    <QuotesForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
