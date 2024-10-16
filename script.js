const myLibrary = [];

function book(author, title, pages, status) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;
}

const theHobbit = new book("JRR", "Hobbit", 250, "read");
const LoTR = new book("Pes", "Hobbit", 250, "read");

myLibrary.splice(0, 0, theHobbit);
myLibrary.splice(0, 0, LoTR);

console.log(myLibrary);

const library = document.querySelector("#library");

myLibrary.map(createBook);

function createBook(object) {
  const eachBook = document.createElement("div");
  eachBook.classList.add("eachBook");
  library.appendChild(eachBook);

  const bookTitle = document.createElement("h2");
  bookTitle.textContent = object.title;
  bookTitle.classList.add("bookTitle");
  eachBook.appendChild(bookTitle);

  const bookAuthor = document.createElement("h3");
  bookAuthor.textContent = "Author: " + object.author;
  bookAuthor.classList.add("bookAuthor");
  eachBook.appendChild(bookAuthor);

  const bookPages = document.createElement("h3");
  bookPages.textContent = "Pages: " + object.pages;
  bookPages.classList.add("bookPages");
  eachBook.appendChild(bookPages);

  const bookStatus = document.createElement("h3");
  bookStatus.textContent = "Status: " + object.status;
  bookStatus.classList.add("bookStatus");
  eachBook.appendChild(bookStatus);
}
