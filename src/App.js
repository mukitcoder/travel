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
            <Route path="/addService">
              <AddService></AddService>
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
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
