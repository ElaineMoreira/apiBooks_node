const express = require('express');
const bodyParser = require('body-parser');
const books = require('./books.json');
const getBooks = require('./middlewares/getBooks');
const postBooks = require('./middlewares/postBooks');
const putBooks = require('./middlewares/putBooks');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

//====pega todos os livros====//
app.get('/books', getBooks);
//====filtra livros por id====//
// app.get('/', (req, res) => {

// });
//====adiciona um novo livro====//
app.post('/books', postBooks);
//====atualiza os livros====//
app.put('/books/:id', putBooks);
//====apaga livros====//
app.delete('/books/:id', (req, res) => {
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
});

app.listen(PORT, () => console.log(`Online na porta ${PORT}`));
