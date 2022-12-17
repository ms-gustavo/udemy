import "./App.css";

// 1 - Config react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";

// components
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1> {/* Elemento fora do BrowerRoutes não irá mudar */}
      <BrowserRouter>
        {/*2 - Links com React Router */}
        <Navbar />
        {/* 9 - Search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 4 - rota dinâmica */}
          <Route path="/products/:id" element={<Product />}></Route>
          {/* 6 - Nested Routes */}
          <Route path="/products/:id/info" element={<Info />}></Route>
          {/* 9 - Search */}
          <Route path="/search" element={<Search />}></Route>
          {/* 10 - redirect */}
          <Route path="/company" element={<Navigate to="/about" />}></Route>
          {/* 7 - No Match Route */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
