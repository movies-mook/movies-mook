const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    title = String,
    writer = String,
    year = Date,
    synopsis = String,
    img = String,
})

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
