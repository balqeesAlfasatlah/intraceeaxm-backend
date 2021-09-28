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
mongoose.connect(`${process.env.MONGOOSE}`);


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