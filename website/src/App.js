import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Team from "./pages/Team";
// import About from "./pages/About";
// import Events from "./pages/Events";
// import Blog from "./pages/Blog";
// import FullArticle from "./pages/FullArticle";
// import ContactUs from "./pages/Contact";
// import Terms from "./pages/Terms";
// import Privacy from "./pages/Privacy";
// import Footer from "./Components/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./chakra.theme";
// import "./styles/fonts.css";

const App = () => {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/blog/:articleSlug" element={<FullArticle />} /> */}
          </Routes>
        </div>
        {/* <Footer /> */}
      </ChakraProvider>
    </Router>
  );
};

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
