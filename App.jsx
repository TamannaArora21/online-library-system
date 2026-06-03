import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* 404 page par Navbar nahi dikhana */}
      {location.pathname !== "/404" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/books" element={<BrowseBooks />} />

        <Route
          path="/books/:category"
          element={<BrowseBooks />}
        />

        <Route
          path="/book/:id"
          element={<BookDetails />}
        />

        <Route
          path="/add-book"
          element={<AddBook />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
<footer>
  <p>© 2026 Online Library System</p>
</footer>

export default App;