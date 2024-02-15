// App.js
import React from 'react';
import './App.css';
import BookList from './components/BookList';
import AuthorList from './components/AuthorList';

//import BookList from './components/BookList';
//import AuthorList from './components/AuthorList';


function App() {
  return (
    <div className="App">
      <h1>Library Management System Admin Dashboard</h1>
      <div className="section">
        <h2>Books</h2>
        <BookList />
      </div>
      <div className="section">
        <h2>Authors</h2>
        <AuthorList />
      </div>
    </div>
  );
}

export default App;
