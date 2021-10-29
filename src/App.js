import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./Pages/Home/Services/Services";
import Booking from "./Pages/Home/Booking/Booking";
import Header from "./Pages/Shared/Header";
import Footer from "./Pages/Shared/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/booking/:id">
            <Booking></Booking>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
