import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Online Library System</h1>
<p>
  Discover your next favorite book from our online library.
</p>
      <h2>Book Categories</h2>

      <ul>
        <li>
          <Link to="/books/Fiction">Fiction</Link>
        </li>

        <li>
          <Link to="/books/Non-Fiction">Non-Fiction</Link>
        </li>

        <li>
          <Link to="/books/Sci-Fi">Sci-Fi</Link>
        </li>
      </ul>

      <h2>Popular Books</h2>

      <div>
        <h3>Harry Potter</h3>
        <p>J.K. Rowling</p>
      </div>

      <div>
        <h3>Atomic Habits</h3>
        <p>James Clear</p>
      </div>

      <div>
        <h3>Dune</h3>
        <p>Frank Herbert</p>
      </div>
    </div>
  );
}

export default Home;