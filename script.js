const myLibrary = [];

function book(author, title, pages, status) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;
}

const theHobbit = new book("JRR", "Hobbit", 250, "read");
const LoTR = new book("JRR", "Hobbit", 250, "read");

console.log(theHobbit);

myLibrary.splice(0, 0, theHobbit);
myLibrary.splice(0, 0, LoTR);

console.log(myLibrary);
