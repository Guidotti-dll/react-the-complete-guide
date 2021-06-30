import { Route } from "react-router-dom";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import MainHeader from "./Components/MainHeader/";
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route component={Welcome} path="/welcome" />
        <Route component={Products} path="/products" />
      </main>
    </div>
  );
}

export default App;
