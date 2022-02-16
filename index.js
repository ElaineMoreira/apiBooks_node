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
//=============================pega todos os livros=====================================//
app.get('/books', (req, res) => {
  // usar json para retorna a resposta em json
  res.status(200).json({ books });
});
//============================pega todos os livros po id================================//
// app.get('/', (req, res) => {

// });
//===========================adiciona um novo livro=====================================//
app.post('/books', (req, res) => {
  // extrair informacoes do req.body
  const { title, author } = req.body;
  // criando um if/else para quando criar um livro novo ter ou author ou title
  if (!author || !title) {
    res.status(422).json({ message: 'Faltando title ou Author' });
  }
  // calcular o novo id do livro que vai ser adicionado
  // pega o ultimo livro
  //doa array de livros eu pego o index igual ao tamanho total menos 1, desse ultimo livro pego id e faço mais
  //id do ultimo livro + 1
  const newId = books[books.length - 1].id + 1;
  // cria uma constante com os dados dos livros
  const newBook = {
    id: newId,
    title,
    author
  };
  // colocando os dados do novo livro dentro do array
  books.push(newBook);
  // vamos dar um status 201, que quer dizer que o livro foi criado
  res.status(201).json(newBook);
});
//=================================atualiza os livros==================================//
app.put('/books/:id', (req, res) => {
  // extrair dados da request parametros de rota
  // req.params contem a chave id
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
});
//====================================apaga livros=====================================//
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
