import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoadingSpinner from "./components/UI/LoadingSpinner";

// import Quotes from "./pages/Quotes";
// import QuoteDetail from "./pages/QuoteDetail";
// import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

const Quotes = lazy(() => import("./pages/Quotes"));
const QuoteDetail = lazy(() => import("./pages/QuoteDetail"));
const NewQuote = lazy(() => import("./pages/NewQuote"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Switch>
            <Route path="/" exact>
              <Redirect to="/quotes" />
            </Route>
            <Route component={Quotes} path="/quotes" exact />
            <Route component={QuoteDetail} path="/quotes/:quoteId" />
            <Route component={NewQuote} path="/new-quote" />
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
