import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./pages/Routes";
import { NavLink } from "react-router-dom";

import Header from "./components/basic/Header";
import Footer from "./components/basic/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main className="main"></main>

      <Routes />
      <Footer/>

    </Router>
  );
}

export default App;
