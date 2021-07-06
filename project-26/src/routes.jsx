import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import Layout from "./components/Layout";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={AllMeetupsPage} />
          <Route path="/new-meetup" component={NewMeetupsPage} />
          <Route path="/favorites" component={FavoritesPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
