const books = require('../books.json');

const postBooks = (req, res) => {
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
};

module.exports = postBooks;
