import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import Subscribe from "./components/shared/Subscribe";
import Main from "./containers/main";
import Shop from "./containers/shop";
import Dashboard from "./containers/dashboard";
import Artists from "./containers/artists";

import ArtistsDashboard from "./containers/artistsDashboard";
import ArtworksDashboard from "./containers/artworksDashboard";
import AccountDashboard from "./containers/accountDashboard";
import FavoritesDashboard from "./containers/favoritesDashboard";
import HistoryDashboard from "./containers/historyDashboard";
import Galleries from "./containers/galleries";
import Contact from "./containers/contact";
import Auctions from "./containers/auctions";
import Text from "./containers/text";
import Product from "./containers/productDet";
import NotFound404 from "./components/shared/404";
import "./styles/index.scss";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" render={(props) => <Main {...props} />} />
        <Route exact path="/store" render={(props) => <Shop {...props} />} />

        <Route
          exact
          path="/dashboard"
          render={(props) => <Dashboard {...props} />}
        />
        <Route
          exact
          path="/artists"
          render={(props) => <Artists {...props} />}
        />
        <Route
          exact
          path="/dashboard/artists"
          render={(props) => <ArtistsDashboard {...props} />}
        />
        <Route
          exact
          path="/dashboard/artworks"
          render={(props) => <ArtworksDashboard {...props} />}
        />
        <Route
          exact
          path="/dashboard/account"
          render={(props) => <AccountDashboard {...props} />}
        />
        <Route
          exact
          path="/dashboard/favorites"
          render={(props) => <FavoritesDashboard {...props} />}
        />
        <Route
          exact
          path="/dashboard/history"
          render={(props) => <HistoryDashboard {...props} />}
        />
        <Route
          exact
          path="/galleries"
          render={(props) => <Galleries {...props} />}
        />
        <Route
          exact
          path="/auctions"
          render={(props) => <Auctions {...props} />}
        />
        <Route
          exact
          path="/contact"
          render={(props) => <Contact {...props} />}
        />
        <Route exact path="/text" render={(props) => <Text {...props} />} />
        <Route
          exact
          path="/store/:index"
          render={(props) => <Product {...props} />}
        />
        <Route render={(props) => <NotFound404 />} />
      </Switch>
      <Subscribe />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
