const books = require('../books.json');

module.exports = (req, res) => {
  res.status(200).json({ books });
};
