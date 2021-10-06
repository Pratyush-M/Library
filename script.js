let myLibrary = [
    
       { title: 'The Four Agreements',
        author: 'Don Miguel Ruiz',
        pages: 93,
        read: 'Yes', },

        { title: 'Eloquent Javascript',
        author: 'Marijne Haverbeke',
        pages: 500,
        read: 'No', },

        
];

function Book(title, author, pages, read) {
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.read = read;
};


function addBookToLibrary() {
let title = document.getElementById('title').textContent;
let author = document.getElementById('title').textContent;
let pages = document.getElementById('title').textContent;
let read = document.getElementById('title').textContent;

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
                li.textContent = 'By ' + myLibrary[indexMain][key] ;
                grid.appendChild(span).appendChild(li);
                }

                else if(key == 'pages') {
                li = document.createElement('li');
                li.textContent =  myLibrary[indexMain][key] + ' Pages' ;
                grid.appendChild(span).appendChild(li);
                }

                else if(myLibrary[indexMain][key] == 'Yes') {
                li = document.createElement('li');
                li.textContent = "Read" ;
                grid.appendChild(span).appendChild(li);
                }

                else if (myLibrary[indexMain][key] == 'No'){
                li = document.createElement('li');
                li.textContent = "Unread" ;
                grid.appendChild(span).appendChild(li);
                }

                else {
                li = document.createElement('li');
                li.textContent = myLibrary[indexMain][key];
                grid.appendChild(span).appendChild(li);
                }
            })
    
        })
    
}



 showBooks();

// addBookToLibrary();
console.log(myLibrary) ;

let evaluator = function (e) {
    console.log(document.getElementsByName("title")[0].value);
    let el = document.querySelectorAll('input');
     if (el[0].checkValidity() == true && el[1].checkValidity() == true && el[2].checkValidity() == true && el[3].checkValidity() == true) {
         document.querySelector('form').classList.remove('showForm')
         document.querySelector('form').reset();
     } 
}
document.getElementById("submit").onclick = evaluator;

document.getElementById('addBook').addEventListener('click', () => {document.querySelector('form').classList.add('showForm')})
