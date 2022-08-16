// This is the page that the routes go on - the components are the pages that are the different routes - nb each of those can have their own routes as well
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import styles from "./App.module.css";
import "./App.css";
// import MobileNavigation from "./Utils/MobileNavigation";
import NavBar from "./Utils/NavBar";

// import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
// import "./App.css";

const App = () => {
  return (
    <>
      <div className="container">
        {/* <div className={styles.container}> */}
        <body className="body">
          {/* <body className={styles.body}> */}
          {/* <Navigation /> */}
          {/* <MobileNavigation /> */}
          <NavBar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
            </Routes>
          </BrowserRouter>
        </body>
      </div>
    </>
  );
};

export default App;
