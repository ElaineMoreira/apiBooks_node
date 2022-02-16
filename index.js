const express = require('express');
const bodyParser = require('body-parser');
const getBooks = require('./middlewares/getBooks');
const postBooks = require('./middlewares/postBooks');
const putBooks = require('./middlewares/putBooks');
const deleteBooks = require('./middlewares/deleteBooks');

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
app.delete('/books/:id', deleteBooks);

app.listen(PORT, () => console.log(`Online na porta ${PORT}`));
