import React from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import Subscribe from "./components/shared/Subscribe";
import Main from "./containers/main";
import Shop from "./containers/shop";
import Dashboard from "./containers/dashboard";
import Artists from "./containers/artists";
import Search from "./containers/search";
import ArtistsDashboard from "./containers/artistsDashboard";
import ArtworksDashboard from "./containers/artworksDashboard";
import AccountDashboard from "./containers/accountDashboard";
import FavoritesDashboard from "./containers/favoritesDashboard";
import HistoryDashboard from "./containers/historyDashboard";
import Galleries from "./containers/galleries";
import Contact from "./containers/contact";
import Auctions from "./containers/auctions";
import Text from "./containers/text";
import ProductDet from "./containers/productDet";
import NotFound404 from "./components/shared/404";
import "./styles/index.scss";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Buy from "./containers/buy";
import Sell from "./containers/sell";
import ArtistsFull from "./containers/artistsFull";
import GalleriesFull from "./containers/galleriesFull";
import Cart from "./containers/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userProvider } from "./store/store";
import AddArtist from "./containers/addArtist";
import AddArtwork from "./containers/addArtwork";
import { getAddress } from "./services/dashboardService";
import Loading from "./containers/loading";
import Delivery from "./containers/delivery";
import AddAddress from "./containers/addAddress";
import ScrollToTopOnMount from "./components/shared/ScrollToTop";
import Approve from "./containers/approve";
import Forgot from "./containers/forgot";
import EditArtwork from "./containers/editArtwork";
import AllDashboard from "./containers/allDashboard";
import Terms from "./containers/terms";
const queryClient = new QueryClient();

function App() {
  const { currentUser, setCurrentUser } = userProvider();

  return currentUser.isAuthenticated ? (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />

      <BrowserRouter>
        <ScrollToTopOnMount></ScrollToTopOnMount>
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
            path="/search"
            render={(props) => <Search {...props} />}
          />
          <Route exact path="/cart" render={(props) => <Cart {...props} />} />
          <Route
            exact
            path="/delivery"
            render={(props) => <Delivery {...props} />}
          />
          <Route
            exact
            path="/artists/:index"
            render={(props) => <ArtistsFull {...props} />}
          />
          <Route exact path="/buy" render={(props) => <Buy {...props} />} />
          <Route exact path="/sell" render={(props) => <Sell {...props} />} />
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
            path="/dashboard/allorders"
            render={(props) => <AllDashboard {...props} />}
          />
          <Route
            exact
            path="/dashboard/addartist"
            render={(props) => <AddArtist {...props} />}
          />
          <Route
            exact
            path="/dashboard/editaddress/:id"
            render={(props) => <AddAddress {...props} />}
          />
          <Route
            exact
            path="/dashboard/addaddress"
            render={(props) => <AddAddress {...props} />}
          />
          <Route
            exact
            path="/dashboard/addartwork"
            render={(props) => <AddArtwork {...props} />}
          />
          <Route
            exact
            path="/dashboard/editartwork/:id"
            render={(props) => <EditArtwork {...props} />}
          />
          <Route
            exact
            path="/galleries"
            render={(props) => <Galleries {...props} />}
          />
          <Route
            exact
            path="/galleries/:index"
            render={(props) => <GalleriesFull {...props} />}
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
          <Route exact path="/terms" render={(props) => <Terms {...props} />} />
          <Route exact path="/text" render={(props) => <Text {...props} />} />
          <Route
            exact
            path="/store/:index"
            render={(props) => <ProductDet {...props} />}
          />
          <Route render={(props) => <NotFound404 />} />
        </Switch>
        <Subscribe />
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  ) : (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <BrowserRouter>
        <ScrollToTopOnMount></ScrollToTopOnMount>
        <Navbar />
        <Switch>
          <Route exact path="/" render={(props) => <Main {...props} />} />
          <Route exact path="/store" render={(props) => <Shop {...props} />} />
          <Route
            exact
            path="/search"
            render={(props) => <Search {...props} />}
          />
          <Route
            exact
            path="/dashboard"
            render={(props) => <Dashboard {...props} />}
          />
          <Route
            exact
            path="/forgot"
            render={(props) => <Forgot {...props} />}
          />
          <Route
            exact
            path="/approveemail"
            render={(props) => <Approve {...props} />}
          />
          <Route
            exact
            path="/artists"
            render={(props) => <Artists {...props} />}
          />
          <Route
            exact
            path="/delivery"
            render={(props) => <Delivery {...props} />}
          />

          <Route
            exact
            path="/artists/:index"
            render={(props) => <ArtistsFull {...props} />}
          />
          <Route exact path="/buy" render={(props) => <Buy {...props} />} />
          <Route exact path="/sell" render={(props) => <Sell {...props} />} />

          <Route
            exact
            path="/galleries"
            render={(props) => <Galleries {...props} />}
          />
          <Route
            exact
            path="/galleries/:index"
            render={(props) => <GalleriesFull {...props} />}
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
          <Route exact path="/terms" render={(props) => <Terms {...props} />} />
          <Route exact path="/text" render={(props) => <Text {...props} />} />
          <Route
            exact
            path="/store/:index"
            render={(props) => <ProductDet {...props} />}
          />
          <Route render={(props) => <NotFound404 />} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
