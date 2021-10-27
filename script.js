
let myLibrary = [
    
        { title: 'The Four Agreements',
        author: 'Don Miguel Ruiz',
        pages: 93,
        read: 'Yes', }

        

        
        
];

createLibrary();
if (!myLibrary) {
    myLibrary = [];
}
console.log(myLibrary)



function Book(title, author, pages, read) {
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.read = read;
};






function addBookToLibrary() {
let title = document.getElementsByName("title")[0].value;
let author = document.getElementsByName("author")[0].value;
let pages = document.getElementsByName("pages")[0].value;
let read = document.getElementsByName("read")[0].value;

let bookObject = new Book(title, author, pages, read);
myLibrary.push(bookObject);
};

let evaluator = function () {
    let el = document.querySelectorAll('input');
     if (el[0].checkValidity() == true && el[1].checkValidity() == true && el[2].checkValidity() == true && el[3].checkValidity() == true) {
      addBookToLibrary();

      let lastLibraryObject = myLibrary[myLibrary.length-1];
      let grid = document.getElementsByClassName("container")[0];
      let li = document.createElement('li');
      let span = document.createElement('span'); 
      span.classList.add(myLibrary.length-1);
      let loopEachKey = function (key,index) {
          if(key == 'author') {
          li = document.createElement('li');
          li.textContent = 'By ' + lastLibraryObject[key] ;
          grid.appendChild(span).appendChild(li);
          }
      
          else if(key == 'pages') {
          li = document.createElement('li');
          li.textContent =  lastLibraryObject[key] + ' Pages' ;
          grid.appendChild(span).appendChild(li);
          }
      
          else if(lastLibraryObject[key] == 'Yes') {
          li = document.createElement('li');
          li.textContent = "Read" ;
          grid.appendChild(span).appendChild(li);
          }
      
          else if (lastLibraryObject[key] == 'No'){
          li = document.createElement('li');
          li.textContent = "Unread" ;
          grid.appendChild(span).appendChild(li);
          }
      
          else {
          li = document.createElement('li');
          li.textContent = lastLibraryObject[key];
          grid.appendChild(span).appendChild(li);
          }
        }

        Object.keys(lastLibraryObject).forEach(loopEachKey);
        let removeBtn = document.createElement('button');
          removeBtn.classList.add('remove')
         let arrayIndexRemove = removeBtn.dataset.libIndex = `${myLibrary.length - 1}`
          removeBtn.textContent = "Remove"
          span.appendChild(removeBtn);

          document.querySelector('form').classList.remove('showForm')
         
         document.querySelector('form').reset();
         Array.from(document.getElementsByClassName('remove')).forEach( (x) => x.addEventListener('click', () => { 
            delete myLibrary[x.dataset.libIndex]
             x.parentNode.remove()
             console.log(myLibrary)
        }))
      
      }
      
      populateStorage();
}
document.getElementById("submit").onclick = evaluator;

document.getElementById('addBook').addEventListener('click', () => {document.querySelector('form').classList.add('showForm')})





function showBooks () {
    let grid = document.getElementsByClassName("container")[0];
    let li = document.createElement('li');

    let libraryLoop = function (element, indexMain) {
        let span = document.createElement('span');
        if (myLibrary[indexMain] == undefined ) {
            return;
        }
    
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
        let removeBtn = document.createElement('button');
            removeBtn.classList.add('remove')
            removeBtn.textContent = "Remove"
            span.appendChild(removeBtn);
    }
        myLibrary.forEach(libraryLoop)
}

showBooks()

console.log(myLibrary) ;

document.getElementsByClassName('close')[0].addEventListener('click', () => document.querySelector('form').classList.remove('showForm'))

Array.from(document.getElementsByClassName('remove')).forEach( (x) => x.addEventListener('click', () => {delete myLibrary[0];
    x.parentNode.remove();
    console.log(myLibrary)}))

function populateStorage() {
    const jsonObj = JSON.stringify(myLibrary);
    localStorage.setItem('storedLibrary', jsonObj);
} 

function createLibrary() {
    
    jsonLibrary = localStorage.getItem('storedLibrary');
     myLibrary = JSON.parse(jsonLibrary); 

}