// This is the page that the routes go on - the components are the pages that are the different routes - nb each of those can have their own routes as well
import { BrowserRouter, Route, Link } from "react-router-dom";

import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
// import About from "./Components/About.js";
// import "./App.css";

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <BrowserRouter>
          <Link>
            <Route path="/" element={<Home />} />
          </Link>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
