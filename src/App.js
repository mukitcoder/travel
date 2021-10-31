import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./Pages/Home/Services/Services";
import Booking from "./Pages/Home/Booking/Booking";
import Header from "./Pages/Shared/Header";
import Footer from "./Pages/Shared/Footer";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./Contexts/AuthProvider";
import PrivateRoute from "./Pages/Login/Login/PrivateRoute/PrivateRoute";
import AddService from "./Pages/AddService/AddService";
import ManageServices from "./Pages/Home/ManageServices/ManageServices";
import AddEvents from "./Pages/AddEvents/AddEvents";
import NotFound from "./Pages/NotFound/NotFound";
import Contact from "./Pages/Contact/Contact";



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/addEvents">
              <AddEvents></AddEvents>
            </Route>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/manageServices">
              <ManageServices></ManageServices>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
