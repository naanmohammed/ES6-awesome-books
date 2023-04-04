import BookList from './bookList.js';
import hideSectionsOnClick from './navigation.js';
import displayDate from './date.js';

const bookListElement = document.getElementById('book-list');
const addBookFormElement = document.getElementById('add-book-form');
const titleInputElement = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');

const bookList = new BookList(bookListElement, addBookFormElement, titleInputElement, authorInput);
bookList.loadBooks();

hideSectionsOnClick();

window.addEventListener('load', displayDate);