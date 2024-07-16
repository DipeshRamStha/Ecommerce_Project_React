import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" exact={true} Component={<Home />} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
