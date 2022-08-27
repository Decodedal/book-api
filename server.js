//dependencys
const express = require('express');
const mongoose = require('mongoose');

//conifig
require('dotenv').config();
const app = express();
//connectr mongo
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

  // MIDDLEWARE
app.use(express.urlencoded({extended: true}))
  
//Router
app.use('/books', require('./controllers/book_controller'))  

app.get('/',(req,res)=>{
    res.send('this is a success');
})

//catch all
app.get('*',(req,res)=>{
    res.send('error 404');
})


app.listen(process.env.PORT,(req,res)=>{
    console.log(`Listening on ${process.env.PORT}`);
})