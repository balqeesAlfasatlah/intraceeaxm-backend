'use strict';
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { application } = require('express');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

const {getFruit,addFruit,getData,deleteFruit,updateFruit}= require('./controller')

const mongoose = require('mongoose');
mongoose.connect('mongodb://balqees:12345@cluster0-shard-00-00.oh7ji.mongodb.net:27017,cluster0-shard-00-01.oh7ji.mongodb.net:27017,cluster0-shard-00-02.oh7ji.mongodb.net:27017/FruitesDatabase?ssl=true&replicaSet=atlas-e444n5-shard-0&authSource=admin&retryWrites=true&w=majority');


app.listen(PORT,()=>{
    console.log(`its listen to port ${PORT}`)
})

//localhost:3008/
app.get('/' ,(req,res)=>{
    res.send("its working fine :) ");
})

//localhost:3008/getFruit
app.get('/getFruit' , getFruit );
app.post('/addFruit' , addFruit );
app.get('/getData/:email' , getData );
app.delete('/deleteFruit/:id' , deleteFruit );
app.put('/updateFruit/:id' , updateFruit );