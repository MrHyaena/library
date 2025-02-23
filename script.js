const myLibrary = [];
let bookIndex = 0;

// Test data, adding few mybooks to library array

// HERE IT ENDS

// Constructor for creating mybooks - book

class book {
  constructor(title, author, pages, status, bookIndex, statusIndex) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.statusIndex = statusIndex;
    this.status = status;
    this.bookIndex = bookIndex;
  }
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
  form.setAttribute("id", "addingForm");
  formDiv.appendChild(form);

  for (let i = 1; i < 4; i++) {
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

  const statusLabel = document.createElement("label");
  statusLabel.setAttribute("id", "label4");
  statusLabel.setAttribute("for", "name4");
  form.appendChild(statusLabel);

  const statusInput = document.createElement("select");
  statusInput.setAttribute("id", "input4");
  statusInput.setAttribute("name", "name4");
  form.appendChild(statusInput);

  const option2 = document.createElement("option");
  option2.setAttribute("value", "Not Read");
  option2.textContent = "Not Read";
  statusInput.appendChild(option2);

  const option1 = document.createElement("option");
  option1.setAttribute("value", "Read");
  option1.textContent = "Read";
  statusInput.appendChild(option1);

  document.getElementById("label1").textContent = "Book Title";
  document.getElementById("label2").textContent = "Book Author";
  document.getElementById("label3").textContent = "Number of pages";
  document.getElementById("label4").textContent = "Did you read it?";

  const sendButton = document.createElement("button");
  sendButton.setAttribute("id", "sendButton");
  sendButton.textContent = "Add";
  sendButton.setAttribute("type", "submit");
  form.appendChild(sendButton);

  const input3 = document.getElementById("input3");
  input3.setAttribute("type", "number");
  input3.addEventListener("input", () => {
    if (input3.validity.typeMismatch) {
      input3.setCustomValidity("I am expecting a number");
    } else {
      input3.setCustomValidity("");
    }
  });

  const input1 = document.getElementById("input1");
  input1.required = true;
  input1.addEventListener("input", () => {
    if (input1.validity.valid) {
      input1.setCustomValidity("");
    } else {
      input1.setCustomValidity("I am expecting a number");
    }
  });

  document.getElementById("addingForm").addEventListener("submit", sendForm);
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
    bookIndex,
    0
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

// Function for creating mybookss in DOM

function createBook(mybooks) {
  const eachBook = document.createElement("div");
  eachBook.classList.add("eachBook");
  library.appendChild(eachBook);

  const bookTitle = document.createElement("h2");
  bookTitle.textContent = mybooks.title;
  bookTitle.classList.add("bookTitle");
  eachBook.appendChild(bookTitle);

  const labelAuthor = document.createElement("h3");
  labelAuthor.textContent = "Author:";
  labelAuthor.classList.add("labelAuthor");
  eachBook.appendChild(labelAuthor);

  const bookAuthor = document.createElement("h3");
  bookAuthor.textContent = mybooks.author;
  bookAuthor.classList.add("bookAuthor");
  eachBook.appendChild(bookAuthor);

  const labelPages = document.createElement("h3");
  labelPages.textContent = "Pages:";
  labelPages.classList.add("labelPages");
  eachBook.appendChild(labelPages);

  const bookPages = document.createElement("h3");
  bookPages.textContent = mybooks.pages;
  bookPages.classList.add("bookPages");
  eachBook.appendChild(bookPages);

  const labelStatus = document.createElement("h3");
  labelStatus.textContent = "Status:";
  labelStatus.classList.add("labelStatus");
  eachBook.appendChild(labelStatus);

  const bookStatus = document.createElement("h3");
  bookStatus.textContent = mybooks.status;
  bookStatus.classList.add("bookStatus");
  eachBook.appendChild(bookStatus);

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", "deleteButton");
  deleteButton.textContent = "Remove";
  eachBook.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(mybooks), 1);
    console.log(myLibrary);
    library.innerHTML = "";
    myLibrary.map(createBook);
  });

  const statusButton = document.createElement("button");
  statusButton.setAttribute("id", "statusButton");
  statusButton.textContent = "Change Status";
  eachBook.appendChild(statusButton);

  statusButton.addEventListener("click", () => {
    console.log(mybooks.statusIndex);
    if (mybooks.statusIndex == 1) {
      Object.defineProperty(mybooks, "status", { value: "Not Read" });
      Object.defineProperty(mybooks, "statusIndex", { value: 0 });
    } else {
      Object.defineProperty(mybooks, "status", { value: "Read" });
      Object.defineProperty(mybooks, "statusIndex", { value: 1 });
    }
    console.log(myLibrary);
    library.innerHTML = "";
    myLibrary.map(createBook);
  });
}

// Function for removing books from library
