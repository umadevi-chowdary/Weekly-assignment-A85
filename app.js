
const express = require('express');
const app = express();
app.use(express.json());
let books = [
  { id: 1, title: "Harry Potter", author: "J.K. Rowling" },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho" }
];

app.get('/', (req, res) => {
  res.send("Welcome to the Book Management API!");
});
app.get('/books', (req, res) => {
  res.json(books);
});
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({
      message: "Both title and author are required to add a new book."
    });
  }
  const newBook = {
    id: books.length + 1,
    title: title,
    author: author
  };

  books.push(newBook);
  res.status(201).json({
    message: "Book added successfully!",
    book: newBook
  });
});
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
