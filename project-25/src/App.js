import React, { useContext } from "react";

import Ingredients from "./components/Ingredients/Ingredients";
import Auth from "./components/Auth";
import { AuthContext } from "./context/authContext";

const App = (props) => {
  const { isAth } = useContext(AuthContext);

  let content = <Auth />;
  if (isAth) {
    content = <Ingredients />;
  }

  return content;
};

export default App;
