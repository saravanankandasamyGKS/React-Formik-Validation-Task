// components/BookList.js
import React, { useState } from 'react';
import BookForm from './BookForm';

const initialBooks = [
  { id: 1, title: 'Book 1', author: 'Author 1', isbn: '1234567890', publicationDate: '2022-01-01' },
  { id: 2, title: 'Book 2', author: 'Author 2', isbn: '0987654321', publicationDate: '2022-02-01' },
];

const BookList = () => {
  const [books, setBooks] = useState(initialBooks);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div>
      <BookForm onSubmit={handleAddBook} />
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <span>{book.title}</span> - <span>{book.author}</span>
            <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
