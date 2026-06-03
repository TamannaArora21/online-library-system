import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !book.title ||
      !book.author ||
      !book.category ||
      !book.description ||
      !book.rating
    ) {
      alert("Please fill all fields");
      return;
    }

    dispatch(
      addBook({
        ...book,
        id: Date.now(),
      })
    );

    navigate("/books");
  };

  return (
    <div>
      <h1>Add New Book</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={book.title}
          onChange={(e) =>
            setBook({ ...book, title: e.target.value })
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="Author"
          value={book.author}
          onChange={(e) =>
            setBook({ ...book, author: e.target.value })
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="Category"
          value={book.category}
          onChange={(e) =>
            setBook({ ...book, category: e.target.value })
          }
        />

        <br /><br />

        <textarea
          placeholder="Description"
          value={book.description}
          onChange={(e) =>
            setBook({ ...book, description: e.target.value })
          }
        />

        <br /><br />

        <input
          type="number"
          placeholder="Rating"
          value={book.rating}
          onChange={(e) =>
            setBook({ ...book, rating: e.target.value })
          }
        />

        <br /><br />

        <button type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;