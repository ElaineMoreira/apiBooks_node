const books = require('../books.json');

const getSearchBooks = (req, res) => {
  // pegamos o autor da query(chave da pagina)
  const { author } = req.query;
  // usando fitro para para filtrar livros do autor
  // includes para verificar se é verdade se contem author digitando o nome dele parcialmente
  const filterBooksAuthor = books.filter((book) => book.author.includes(author));
  res.status(200).json({ books: filterBooksAuthor });
  // se nao tiver o livro retorna automaticamente um array vazio
  // para fazer a requisicao no navegador usa: "http://localhost:3000/books/search/?author=megan"
};

module.exports = getSearchBooks;
