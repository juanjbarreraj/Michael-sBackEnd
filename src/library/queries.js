const getBooks = `
  SELECT 
    id, 
    book_name, 
    book_type, 
    author, 
    date_read, 
    rating, 
    notes, 
    created_at
  FROM books
  ORDER BY id DESC
`;

const getBookById = `
  SELECT * FROM books WHERE id = $1
`;

const addBook = `
  INSERT INTO books 
    (book_name, book_type, author, date_read, rating, notes)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *
`;

const updateBook = `
  UPDATE books
  SET 
    book_name = $1,
    book_type = $2,
    author = $3,
    date_read = $4,
    rating = $5,
    notes = $6
  WHERE id = $7
  RETURNING *
`;

module.exports = {
  getBooks,
  getBookById,
  addBook,
  updateBook,
};