import React from "react";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./Home";
import Products from "./Products";

const App = () => {
  return (
    <Router>
      <div className="page">
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/*" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;