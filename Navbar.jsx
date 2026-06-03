import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Online Library System</h2>

      <Link to="/">Home</Link> |{" "}
      <Link to="/books">Browse Books</Link> |{" "}
      <Link to="/add-book">Add Book</Link>
    </nav>
  );
}

export default Navbar;
