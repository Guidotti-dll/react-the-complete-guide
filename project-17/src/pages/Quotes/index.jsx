import React, { useEffect } from "react";
import QuotesList from "../../components/quotes/QuoteList";
import NoQuotesFound from "../../components/quotes/NoQuotesFound";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import useHttp from "../../hooks/use-http";
import { getAllQuotes } from "../../lib/api";

const Quotes = () => {
  const {
    sendRequest,
    status,
    data: loadQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadQuotes || loadQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return <QuotesList quotes={loadQuotes} />;
};

export default Quotes;
