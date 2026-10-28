'use strict';

// Q3 - Library Management System
class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) {
      return false;
    }

    this.isIssued = true;
    return true;
  }

  returnBook() {
    if (!this.isIssued) {
      return false;
    }

    this.isIssued = false;
    return true;
  }
}

const books = [
  new Book('The Hobbit', 'J. R. R. Tolkien', '9780547928227'),
  new Book('Pride and Prejudice', 'Jane Austen', '9780141439518'),
  new Book('Dune', 'Frank Herbert', '9780441172719', true)
];

function issueBookByIsbn(isbn, bookCollection) {
  const book = bookCollection.find((item) => item.isbn === isbn);
  if (!book) {
    console.log(`No book found with ISBN ${isbn}.`);
    return false;
  }

  if (!book.issueBook()) {
    console.log(`"${book.title}" is already issued.`);
    return false;
  }

  console.log(`Issued "${book.title}" to the reader.`);
  return true;
}

console.log('Q3 - Library Management System');
console.log('Available books:');
books
  .filter((book) => !book.isIssued)
  .forEach((book) => console.log(`${book.title} by ${book.author} (ISBN: ${book.isbn})`));
issueBookByIsbn('9780547928227', books);
