import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./pages/Routes";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
      <Routes />
      </div>     
    </Router>
  );
}

export default App;
