import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import Subscribe from "./components/shared/Subscribe";
import Main from "./containers/main";
import Shop from "./containers/shop";
import Contact from "./containers/contact";

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
