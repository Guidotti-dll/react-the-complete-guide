import React from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;
  return (
    <>
      <div>detail -- {quoteId}</div>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
