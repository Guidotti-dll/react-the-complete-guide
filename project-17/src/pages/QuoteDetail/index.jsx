import React from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../../components/comments/Comments";
import HighlightedQuote from "../../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Guidotti", text: "Learning React is fun" },
  { id: "q2", author: "John", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const params = useParams();
  const { path, url } = useRouteMatch();
  const { quoteId } = params;

  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
