const books = require('../books.json');

const deleteBooks = (req, res) => {
  const { id } = req.params;
  const bookIndex = books.findIndex(book => `${book.id}` === id);
  // caso especifico do delete que e se eu nao achei eu nao preciso dar erro
  // caso nao exista o livro
  if (!bookIndex === -1) {
    res.status(204).json.end();
  }
  // se o livro existir
  // usa o splice, comando de remover
  books.splice(bookIndex, 1);
  res.status(204).end()
};

module.exports = deleteBooks;
