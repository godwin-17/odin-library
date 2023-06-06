let myLibrary = [];
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputStatus = document.querySelector("#status");
const button = document.querySelector("button");
const body = document.querySelector("body");
const booksContainer = document.querySelector(".books-container");
const form = document.querySelector("form");
const errorTitle = document.querySelector(".error-title");
const errorAuthor = document.querySelector(".error-author");
const errorPages = document.querySelector(".error-pages");
const errorStatus = document.querySelector(".error-status");

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages + " pages";
  this.status = status;
}

function addBookToLibrary() {
  let book = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputStatus.value);
  myLibrary.push(book);
  booksContainer.innerHTML = "";
  displayBook();
  setDataAttribute();
}

inputTitle.addEventListener("input", () => {
  if (inputTitle.validity.valid) {
    errorTitle.textContent = "";
  } else {
    showTitleError();
  }
});

inputAuthor.addEventListener("input", () => {
  if (inputAuthor.validity.valid) {
    errorAuthor.textContent = "";
  } else {
    showAuthorError();
  }
});

inputPages.addEventListener("input", () => {
  if (inputPages.validity.valid) {
    errorPages.textContent = "";
  } else {
    showPagesError();
  }
});

inputStatus.addEventListener("input", () => {
  if (inputStatus.validity.valid) {
    errorStatus.textContent = "";
  } else {
    showStatusError();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!inputTitle.validity.valid) {
    showTitleError();
  } else if (!inputAuthor.validity.valid) {
    showAuthorError();
  } else if (!inputPages.validity.valid) {
    showPagesError();
  } else if (!inputStatus.validity.valid) {
    showStatusError();
  } else {
    addBookToLibrary();
  }
});

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

booksContainer.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
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

function showTitleError() {
  if (inputTitle.validity.valueMissing) {
    errorTitle.textContent = "You need to enter a title";
  }
}

function showAuthorError() {
  if (inputAuthor.validity.valueMissing) {
    errorAuthor.textContent = "You need to enter an author";
  }
}

function showPagesError() {
  if (inputPages.validity.valueMissing) {
    errorPages.textContent = "You need to enter a number";
  } else if (inputPages.validity.rangeUnderflow) {
    errorPages.textContent = "Your book need to has at least 1 page";
  }
}

function showStatusError() {
  if (inputStatus.validity.valueMissing) {
    errorStatus.textContent = "You need to enter a status";
  }
}