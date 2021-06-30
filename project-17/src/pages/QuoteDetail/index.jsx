import React from "react";
import {
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import Comments from "../../components/comments/Comments";
import HighlightedQuote from "../../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
  const { path } = useRouteMatch();
  const { state, pathname } = useLocation();
  const { push } = useHistory();
  const { quote } = state;

  if (!quote) {
    return <p>No quote found!</p>;
  }

  const goToComment = () => {
    push({
      pathname: `${pathname}/comments`,
      state: {
        quote,
      },
    });
  };

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={path} exact>
        <div className="centered">
          <button onClick={goToComment} className="btn--flat">
            Load comments
          </button>
        </div>
      </Route>
      <Route path={`${path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
