let myLibrary = [
    
       { title: 'The Four Agreements',
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

                if(key == 'author') {
                li = document.createElement('li');
                console.log(typeof(key));
                li.textContent = 'By ' + myLibrary[indexMain][key] ;
                grid.appendChild(span).appendChild(li);
                }

                else if(key == 'pages') {
                li = document.createElement('li');
                console.log(typeof(key));
                li.textContent =  myLibrary[indexMain][key] + ' Pages' ;
                grid.appendChild(span).appendChild(li);
                }

                else if(myLibrary[indexMain][key] == 'Yes') {
                li = document.createElement('li');
                console.log(typeof(key));
                li.textContent = "Read" ;
                grid.appendChild(span).appendChild(li);
                }

                else if (myLibrary[indexMain][key] == 'No'){
                li = document.createElement('li');
                console.log(typeof(key));
                li.textContent = "Unread" ;
                grid.appendChild(span).appendChild(li);
                }

                else {
                li = document.createElement('li');
                console.log(typeof(key));
                li.textContent = myLibrary[indexMain][key];
                grid.appendChild(span).appendChild(li);
                }
            })
    
        })
    
}



 showBooks();

// addBookToLibrary();
console.log(myLibrary)