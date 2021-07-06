import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllMeetupsPage from "./components/pages/AllMeetups";
import FavoritesPage from "./components/pages/Favorites";
import NewMeetupsPage from "./components/pages/NewMeetup";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AllMeetupsPage} />
        <Route path="/new-meetup" component={NewMeetupsPage} />
        <Route path="/favorites" component={FavoritesPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
