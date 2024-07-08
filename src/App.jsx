import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

` `;
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="works" element={<Works />} />
        <Route path="contact" element={<Contact />} />
     
      </Routes>
    </>
  );
}

export default App;
