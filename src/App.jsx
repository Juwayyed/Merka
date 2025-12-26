import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/index.jsx";
import Home from "./pages/home";
import Search from "./components/Search/index.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} exact={true} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
