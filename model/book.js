const mongoose = require('mongoose');
let {Schema} = mongoose;

const bookSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    year: Number,
    quantity: Number,
    imageURL: {type: String}
})
const Book = mongoose.model('Book',bookSchema)
module.exports = Book