// components/AuthorList.js
import React, { useState } from 'react';
import AuthorForm from './AuthorForm';

const initialAuthors = [
  { id: 1, name: 'Author 1', birthDate: '1990-01-01', biography: 'Author 1 Biography' },
  { id: 2, name: 'Author 2', birthDate: '1995-02-01', biography: 'Author 2 Biography' },
];

const AuthorList = () => {
  const [authors, setAuthors] = useState(initialAuthors);

  const handleAddAuthor = (newAuthor) => {
    setAuthors([...authors, newAuthor]);
  };

  const handleDeleteAuthor = (id) => {
    setAuthors(authors.filter(author => author.id !== id));
  };

  return (
    <div>
      <AuthorForm onSubmit={handleAddAuthor} />
      <ul>
        {authors.map(author => (
          <li key={author.id}>
            <span>{author.name}</span>
            <button onClick={() => handleDeleteAuthor(author.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
