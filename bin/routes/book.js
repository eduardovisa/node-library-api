const express = require('express');
const Book = require('../models/Book');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/book/list', (req, res) => {
  let book = new Book();
  let listBooks = book.find();

  res.json({ status: true, listBooks });
});

app.get('/book/:isbn', (req, res) => {
  let isbn = req.params.isbn;
  let book = new Book();
  let bookByISBN = book.findISBN(isbn);

  res.json({ status: true, book: bookByISBN });
});

app.post('/book/create', (req, res) => {
  let { title, pages, year, isbn, author } = req.body;
  let book = new Book(title, pages, year, isbn, author);
  let created = book.create(book);

  res.json({ status: true, message: created });
});

app.delete('/book/delete/:isbn', (req, res) => {
  let isbn = req.params.isbn;
  let book = new Book();

  let message = book.delete(isbn);

  res.json({ status: true, message });
});

app.put('/book/update', (req, res) => {
  let { title, pages, year, isbn, author } = req.body;
  let book = new Book(title, pages, year, isbn, author);

  let message = book.update(book);

  res.json({ status: true, message });
});

module.exports = app;
