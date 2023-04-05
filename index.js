import BookList from './modules/bookList.js';
import hideSectionsOnClick from './modules/navigation.js';
import displayDate from './modules/date.js';

const bookListElement = document.getElementById('book-list');
const addBookFormElement = document.getElementById('add-book-form');
const titleInputElement = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');

const bookList = new BookList(bookListElement, addBookFormElement, titleInputElement, authorInput);
bookList.loadBooks();

window.addEventListener('load', displayDate);
window.addEventListener('load', hideSectionsOnClick);