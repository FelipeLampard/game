import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/contact";
import Navigation from "./components/NavBar";


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
