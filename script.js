let myLibrary = [
    
       { title: 'Four Agreements',
        author: 'Don Miguel Ruiz',
        pages: 93,
        read: 'Read', },

        { title: 'Eloquent Javascript',
        author: 'Marijne Haverbeke',
        pages: 500,
        read: 'Unread', }
];

function Book(title, author, pages, read) {
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.read = read;
};


function addBookToLibrary() {
let title = prompt('Name of book');
let author = prompt('Name of Author');
let pages = prompt('Number of pages')
let read = prompt('Book status (Read/Unread)')

let bookObject = new Book(title, author, pages, read);
myLibrary.push(bookObject);
};

function showBooks () {
   let grid = document.getElementsByClassName("container")[0];
    let span = document.createElement('span');
    span.textContent = 'hey';
    grid.appendChild(span);
    
    
}

 showBooks();

// addBookToLibrary();
console.log(myLibrary)