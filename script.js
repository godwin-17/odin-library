let myLibrary = [];
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputStatus = document.querySelector("#status");
const button = document.querySelector("button");

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
}

button.addEventListener("click", addBookToLibrary);