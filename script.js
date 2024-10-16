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

  const bookAuthor = document.createElement("h2");
  bookAuthor.textContent = object.author;
  bookAuthor.classList.add("bookAuthor");
  eachBook.appendChild(bookAuthor);

  const bookTitle = document.createElement("h2");
  bookTitle.textContent = object.title;
  bookTitle.classList.add("bookTitle");
  eachBook.appendChild(bookTitle);

  const bookPages = document.createElement("h2");
  bookPages.textContent = object.pages;
  bookPages.classList.add("bookPages");
  eachBook.appendChild(bookPages);

  const bookStatus = document.createElement("h2");
  bookStatus.textContent = object.status;
  bookStatus.classList.add("bookStatus");
  eachBook.appendChild(bookStatus);
}
