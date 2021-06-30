import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import MainHeader from "./Components/MainHeader/";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route component={Welcome} path="/welcome" />
          <Route component={Products} path="/products" exact />
          <Route component={ProductDetail} path="/products/:productId" />
          <Redirect />
        </Switch>
      </main>
    </div>
  );
}

export default App;
