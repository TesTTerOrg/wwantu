import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Favourites from "./components/Favourites/Favourites";
import Navbar from "./components/Navbar/Navbar";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/favoritos">
            <Favourites />
          </Route>
          <Route exact path="/">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
