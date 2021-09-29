let myLibrary = [];

function Book(title, author, pages, read) {
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.read = read;
};


function addBookToLibrary() {
let title = prompt('Name of book');
let author = prompt('Name of Author');

let bookObject = new Book(title, author);
myLibrary.push(bookObject);
};

addBookToLibrary();
console.log(myLibrary)