let myLibrary = [];
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputStatus = document.querySelector("#status");
const button = document.querySelector("button");
const body = document.querySelector("body");
const booksContainer = document.querySelector(".books-container");

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;

  this.info = function() {
    return `${title} by ${author}, ${pages}, ${status}`;
  }
}

function addBookToLibrary() {
  let book = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputStatus.value);
  myLibrary.push(book);
  console.log(myLibrary);
  booksContainer.innerHTML = "";
  displayBook();
}

button.addEventListener("click", addBookToLibrary);

function displayBook() {
  myLibrary.forEach(book => {
    booksContainer.innerHTML += `${book.title} ${book.author} ${book.pages} ${book.status} </br>`;
    body.appendChild(booksContainer);
  });
}

displayBook();