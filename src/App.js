import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Cv from "./pages/Cv";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mywebpage" element={<Layout />}>
          <Route path="/mywebpage" element={<Main />} />
          <Route path="/mywebpage/portfolio" element={<Portfolio />} />
          <Route path="/mywebpage/cv" element={<Cv />} />
          <Route path="/mywebpage/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
