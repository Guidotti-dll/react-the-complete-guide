import Routes from "./routes";
import FavoritesContextProvider from "./store/favoritesContext";
function App() {
  return (
    <FavoritesContextProvider>
      <Routes />
    </FavoritesContextProvider>
  );
}

export default App;
