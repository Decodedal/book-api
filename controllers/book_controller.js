const express = require('express');
const books = express.Router();
const Book = require('../model/book')

books.get('/seed', (req, res) => {
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
})




books.get('/',async (req,res)=>{
try{
    const foundBooks = await Book.find()
         res.json(foundBooks)
   }catch(e){
    console.log(e)
    res.status(404).send('error 404')
   }   
})

books.get('/:id',(req,res)=>{
    Book.findById(req.params.id)
        .then(foundbook=>{
            res.json(foundbook)
        })
        .catch(err=>{
            res.status(404).send('error404')
        })
})

books.put('/:id',async (req,res)=>{
    try{
    const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(updateBook)
}catch(e){
    console.log(e)
    res.status(404).send("error 404")
}
})

books.post('/', async(req,res)=>{
    try{
        const newBook = await Book.create(req.body)
        res.json(newBook)
    }catch(e){
        console.log(e)
        res.status(404).res.send('error404')
    }
})

books.delete('/:id', async(req,res)=>{
    try{
        const deleteBook = await Book.findByIdAndDelete(req.params.id)
        res.send('Book successfully deleted')
    }catch(e){
        console.log(e)
        res.status(404).send('error 404')
    }
})



module.exports = books