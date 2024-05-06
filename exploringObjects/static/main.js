
// Task 1: Create a constructor function for the Book object with properties for title, author, and pages.

class Book {
    // constructor(title, author, pages){
        // this.title = title;
        // this.author = author;
        // this.pages = pages;
        // __init__ is to constructor() in JS
    constructor() {

    }

// Task 2: Implement a method within the Book object to display book information.

    setAttributes = (attributes) => {
        Object.assign(this, attributes)
    }

    getAttributes = () => {
        return {
            title : this.title,
            author : this.author,
            pages : this.pages
        }
    }
    

}

// Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author.

let bookStorage = []

const data = {
    title: "The Hobbit",
    author: "Tolkein",
    pages: 103
}

function handleGetData(event) {
    event.preventDefault();
    
    
    const data = {
        
    title: event.target.elements.title.value,
    author: event.target.elements.author.value,
    pages: event.target.elements.pages.value
    }
    console.log(data)
    const myBook = new Book();
    myBook.setAttributes(data); 
    console.log(myBook.getAttributes());
    bookStorage.push(data);

    console.log(bookStorage)
    displayBooks(myBook);
}

function displayBooks(book) {
    
    const display = document.querySelector('.book-display')
    console.log(display)
    const bookData = book.getAttributes();
    
    
        const card = `<div class="card col-md-4 col-12 rounded p-2">
        <div class="card-body">
          <h5 class="card-title">${bookData.title}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Author: ${bookData.author}</li>
          <li class="list-group-item">Number of Pages: ${bookData.pages}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="btn">Update</a>
          <a href="#" class="btn">Delete</a>
        </div>
      </div>`
      
      display.insertAdjacentHTML("beforeend", card)
    
}


function handleGetBook(event) {
    event.preventDefault();
    const data = {
        title: event.target.elements.title.value,
        author: event.target.elements.author.value,
    }
    const myBook = new Book();
    myBook.setAttributes(data);
    const bookData = myBook.getAttributes();
    for (let i in bookStorage){
        if (bookData.title == bookStorage[i].title || bookData.author == bookStorage[i].author){
            displayBooks(myBook);
            console.log(`We do have ${bookStorage[i].title} by ${bookStorage[i].author} :)`)
        }
        else(
            console.log(`We don't have ${bookData.title} :(`)
        )
    }
}

// Task 4: Create functions that utilize the filter method to filter out books that contain more than 100 pages and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.
const maxPage = 100
function pageGet() {
    const myBook = new Book();
    myBook.setAttributes(data);
    let filteredBooks = bookStorage.filter(book => book.pages > 100);
    console.log(filteredBooks)
    
    // multi-line version of line 113. filtered with 'return'

    // let filteredBooks = bookStorage.filter((book) =>{
    //     return book.pages > 100;
    // });

    filteredBooks = filteredBooks.map(book => "Title: " + book.title + " Author: " + book.author)
    console.log(filteredBooks)
}
