import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Quotes from "./pages/Quotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
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
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
