import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import { Header, Footer } from "./sections/index";
import { Home, Browse } from "./Pages/index";
import { Container } from "./Components/index";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          {" "}
          <Routes>
            <Route path="/" element={<Home />} />
           
            <Route path="/browse" element={<Browse />} />
            
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default App;
