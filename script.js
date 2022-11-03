let myLibrary = [];
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputStatus = document.querySelector("#status");
const button = document.querySelector("button");
const body = document.querySelector("body");
const booksContainer = document.querySelector(".books-container");

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages + " pages";
    this.status = status;
  }
}

function addBookToLibrary() {
  let book = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputStatus.value);
  myLibrary.push(book);
  console.log(myLibrary);
  booksContainer.innerHTML = "";
  displayBook();
  setDataAttribute();
}

button.addEventListener("click", addBookToLibrary);

function displayBook() {
  myLibrary.forEach(book => {
    booksContainer.innerHTML += `<div class="book"> <div class="title">${book.title}</div> <div>${book.author}</div> <div>${book.pages}</div> <div class="status">${book.status}</div> <button class="delete">Delete</button> </div>`;
    body.appendChild(booksContainer);
    setDataAttribute();
  });
}


function setDataAttribute() {
  const books = document.querySelectorAll(".book");
  books.forEach((book, index) => {
    book.dataset.index = index;
  });
}

// Delete books
booksContainer.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    console.log(e.target.parentElement.dataset.index);
    myLibrary.splice(e.target.parentElement.dataset.index, 1);
    setDataAttribute();
  }
});

booksContainer.addEventListener("click", e => {
  if (e.target.classList.contains("status")) {
    if (e.target.textContent === "Read") {
      e.target.textContent = "Not Read";
    } else if (e.target.textContent === "Not Read") {
      e.target.textContent = "Read";
    }
  }
});