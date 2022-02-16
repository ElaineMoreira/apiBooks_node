const books = require('../books.json');

const putBooks = (req, res) => {
  const { id } = req.params;
  // vamos pegar o titulo e o autor do body
  const { title, author } = req.body;
// para ver em qual posicao do array ele esta
// findIndex-retorna a posicao daquele item no array
// ${book.id}` === id = compara string com numero
  const bookIndex = books.findIndex(book => `${book.id}` === id)
  const book = books[bookIndex];
// se nao achar o livro if/else
  if (!book || !bookIndex) {
    return res.status(404).json({ message: `livro com o id ${id}, não existe` })
  }
  // se achar o livro retorna
  book.title = title;
  book.author = author;
  books[bookIndex] = book;
  res.status(200).json(book);
};

module.exports = putBooks;
