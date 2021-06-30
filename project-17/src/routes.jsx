import { BrowserRouter, Switch, Route } from "react-router-dom";
import Quotes from "./pages/Quotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Quotes} path="/quotes" exact />
        <Route component={QuoteDetail} path="/quotes/:quoteId" />
        <Route component={NewQuote} path="/new-quote" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
