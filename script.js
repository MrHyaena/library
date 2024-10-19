const myLibrary = [];
let bookIndex = 0;

// Test data, adding few objects to library array

const theHobbit = new book("JRR", "Hobbit", 250, "read");
const LoTR = new book("Pes", "Hobbit", 250, "read");
myLibrary.splice(0, 0, theHobbit);
myLibrary.splice(0, 0, LoTR);

// HERE IT ENDS

// Constructor for creating objects - book

function book(title, author, pages, status, index) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;
  this.index = bookIndex;
}

const btnAddBook = document.querySelector("btnForm");
const controls = document.querySelector("#controls");
const formContainer = document.querySelector("#formContainer");
const library = document.querySelector("#library");

myLibrary.map(createBook);

document.getElementById("btnForm").addEventListener("click", showForm);

function showForm() {
  const formDiv = document.createElement("div");
  formDiv.classList.add("formDiv");
  formContainer.appendChild(formDiv);

  const form = document.createElement("form");
  form.classList.add("form");
  formDiv.appendChild(form);

  for (let i = 1; i < 5; i++) {
    const inputLabel = document.createElement("label");
    inputLabel.setAttribute("id", "label" + i);
    inputLabel.setAttribute("for", "name" + i);
    form.appendChild(inputLabel);

    const inputName = document.createElement("input");
    inputName.setAttribute("id", "input" + i);
    inputName.setAttribute("name", "name" + i);
    inputName.setAttribute("type", "text");
    form.appendChild(inputName);
  }

  document.getElementById("label1").textContent = "Book Title";
  document.getElementById("label2").textContent = "Book Author";
  document.getElementById("label3").textContent = "Number of pages";
  document.getElementById("label4").textContent = "Did you read it?";

  const sendButton = document.createElement("button");
  sendButton.setAttribute("id", "sendButton");

  sendButton.textContent = "Add";
  formContainer.appendChild(sendButton);
  document.getElementById("sendButton").addEventListener("click", sendForm);
}

// Function for Add button - Sending the form inputs
//      and refreshing library div and formContainer div

function sendForm() {
  dataTitle = document.getElementById("input1").value;
  dataAuthor = document.getElementById("input2").value;
  dataPages = document.getElementById("input3").value;
  dataStatus = document.getElementById("input4").value;

  console.log(dataTitle);

  const newBook = new book(
    dataTitle,
    dataAuthor,
    dataPages,
    dataStatus,
    bookIndex
  );
  myLibrary.splice(myLibrary.length, 0, newBook);

  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("input3").value = "";
  document.getElementById("input4").value = "";

  bookIndex = bookIndex + 1;
  formContainer.innerHTML = "";
  library.innerHTML = "";
  myLibrary.map(createBook);

  console.log(myLibrary);
}

// Function for creating objects in DOM

function createBook(object) {
  const eachBook = document.createElement("div");
  eachBook.classList.add("eachBook");
  library.appendChild(eachBook);

  const bookTitle = document.createElement("h2");
  bookTitle.textContent = object.title;
  bookTitle.classList.add("bookTitle");
  eachBook.appendChild(bookTitle);

  const labelAuthor = document.createElement("h3");
  labelAuthor.textContent = "Author:";
  labelAuthor.classList.add("labelAuthor");
  eachBook.appendChild(labelAuthor);

  const bookAuthor = document.createElement("h3");
  bookAuthor.textContent = object.author;
  bookAuthor.classList.add("bookAuthor");
  eachBook.appendChild(bookAuthor);

  const labelPages = document.createElement("h3");
  labelPages.textContent = "Pages:";
  labelPages.classList.add("labelPages");
  eachBook.appendChild(labelPages);

  const bookPages = document.createElement("h3");
  bookPages.textContent = object.pages;
  bookPages.classList.add("bookPages");
  eachBook.appendChild(bookPages);

  const labelStatus = document.createElement("h3");
  labelStatus.textContent = "Status:";
  labelStatus.classList.add("labelStatus");
  eachBook.appendChild(labelStatus);

  const bookStatus = document.createElement("h3");
  bookStatus.textContent = object.status;
  bookStatus.classList.add("bookStatus");
  eachBook.appendChild(bookStatus);

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", "deleteButton");
  deleteButton.textContent = "Remove";
  eachBook.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(object), 1);
    console.log(myLibrary);
    library.innerHTML = "";
    myLibrary.map(createBook);
  });
}

// Function for removing books from library
