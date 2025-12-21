// Type untuk Book
type Book = {
  title: string;
  author: string;
  publicationYear: number;
};

// Array untuk menyimpan buku
let books: Book[] = [];

// Function untuk menambah buku
function addBook(title: string, author: string, publicationYear: number): void {
  const newBook: Book = {
    title: title,
    author: author,
    publicationYear: publicationYear,
  };

  books.push(newBook);
  console.log(`Book added: "${title}" by ${author} (${publicationYear})`);
}

// Function untuk menampilkan semua buku
function listBooks(): void {
  console.log('All Books:');

  // Untuk test: tidak cek empty
  // Untuk README:
  if (books.length === 0) console.log('No books...');

  books.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
  });
}

function searchBook(title?: string): void {
  // Handle both test and README requirements
  if (title === undefined) {
    // Untuk test
    console.log('Please provide a title to search.');
    return;
  }

  console.log(`Search Results for "${title}":`);

  // PENTING: CASE-SENSITIVE search (sesuai test)

  const foundBooks = books.filter((book) => book.title.includes(title));

  // PENTING: Format pesan spesifik sesuai test
  if (foundBooks.length === 0) {
    console.log(`No books found with title containing "${title}".`);
    return;
  }

  foundBooks.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
  });
}

// Export functions
export { addBook, listBooks, searchBook };
