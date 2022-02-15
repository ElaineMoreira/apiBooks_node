const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
//==========banco de dados==========//
const books = [
  { id: 1, title: 'The Lord of Rings', author: 'J.R.R. Tolkien' },
  { id: 2, title: 'Dune', author: 'Frank Herbert' },
  { id: 3, title: 'Foundation', author: 'Isaac Asimov' },
  { id: 4, title: 'The Man in The High Castle', author: 'Philip K Dick' },
  { id: 5, title: '1984', author: 'George Orwell' },
  { id: 6, title: 'Brave New World', author: 'Aldous Huxley' },
  { id: 7, title: '7 minutos depois da meia noite', author: 'Patrick Ness' },
];
//===============pega todos os livros===================//
app.get('/books', (req, res) => {
  // usar json para retorna a resposta em json
  res.status(200).json({ books });
});
//============pega todos os livros po id================//
// app.get('/', (req, res) => {

// });
//============adiciona um novo livro================//
app.post('/', (req, res) => {

});
//============atualiza os livros================//
app.put('/', (req, res) => {

});
//============apaga livros================//
app.delete('/', (req, res) => {

});

app.listen(PORT, () => console.log(`Online na porta ${PORT}`));
