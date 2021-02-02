import React from "react";
import { Route } from "react-router-dom";
import General from "./componentes/General/General";
import Listado from "./componentes/Listado/Listado";

function App() {
  return (
    <React.Fragment>
      <Route path="/" component={General} />
      <Route path="/listado" component={Listado} />
    </React.Fragment>
  );
}

export default App;
