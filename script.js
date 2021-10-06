let myLibrary = [
    
       { title: 'Four Agreements',
        author: 'Don Miguel Ruiz',
        pages: 93,
        read: 'Yes', },

        { title: 'Eloquent Javascript',
        author: 'Marijne Haverbeke',
        pages: 500,
        read: 'No', }
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
    let li = document.createElement('li');
    
        myLibrary.forEach( function (element, indexMain) {
            let span = document.createElement('span');

            Object.keys(myLibrary[indexMain]).forEach( function (key, index) {
                li = document.createElement('li');
                console.log(typeof(key));
                li.textContent = key.charAt(0).toUpperCase() + key.substring(1) + ': ' + myLibrary[indexMain][key];
                grid.appendChild(span).appendChild(li);
            })
    
        })
    
}



 showBooks();

// addBookToLibrary();
console.log(myLibrary)