import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

function BrowseBooks() {
  const { category } = useParams();

  const books = useSelector((state) => state.books.books);

  const [search, setSearch] = useState("");

  let filteredBooks = books;

  // Category Filter
  if (category) {
    filteredBooks = filteredBooks.filter(
      (book) => book.category === category
    );
  }

  // Search Filter
  filteredBooks = filteredBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Browse Books</h1>

      <input
        type="text"
        placeholder="Search by Title or Author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredBooks.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Category: {book.category}</p>

          <Link to={`/book/${book.id}`}>
            View Details
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default BrowseBooks;
