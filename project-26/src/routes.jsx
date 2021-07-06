import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import MainNavigation from "./components/MainNavigation";

const Routes = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Switch>
        <Route path="/" exact component={AllMeetupsPage} />
        <Route path="/new-meetup" component={NewMeetupsPage} />
        <Route path="/favorites" component={FavoritesPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
