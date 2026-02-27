const pool = require("../../db");
const queries = require("./queries");

// GET /api/v1/library
const getLibrary = (req, res) => {
  pool.query(queries.getBooks, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
    return res.status(200).json(results.rows);
  });
};

// GET /api/v1/library/:id
const getLibraryById = (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  pool.query(queries.getBookById, [id], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
    if (results.rows.length === 0) {
      return res.status(404).json({ error: "Book not found" });
    }
    return res.status(200).json(results.rows[0]);
  });
};

// POST /api/v1/library
const addBook = (req, res) => {
  const {
    book_name,
    book_type = null,
    author = null,
    date_read = null,
    rating = null,
    notes = null,
  } = req.body;

  if (!book_name || typeof book_name !== "string") {
    return res.status(400).json({ error: "book_name is required" });
  }

  pool.query(
    queries.addBook,
    [book_name, book_type, author, date_read, rating, notes],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
      }
      return res.status(201).json(results.rows[0]);
    }
  );
};

// PUT /api/v1/library/:id
const updateLibrary = (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  const { book_name, book_type, author, date_read, rating, notes } = req.body;

  pool.query(
    queries.updateBook,
    [
      book_name ?? null,
      book_type ?? null,
      author ?? null,
      date_read ?? null,
      rating ?? null,
      notes ?? null,
      id,
    ],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
      }
      if (results.rows.length === 0) {
        return res.status(404).json({ error: "Book not found" });
      }
      return res.status(200).json(results.rows[0]);
    }
  );
};

module.exports = {
  getLibrary,
  getLibraryById,
  addBook,
  updateLibrary,
};