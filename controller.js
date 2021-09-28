'use strict';
const axios = require("axios");
const {Fruits,FruitModel}= require('./model');

const getFruit=(req,res)=>{
    let url ='https://fruit-api-301.herokuapp.com/getFruit'
    axios.get(url).then(item=>{
        console.log(item.data.fruits);
        let fruitData = item.data.fruits;
        fruitData.map(items=>{
          return( new Fruits(items))
        })
          res.json(fruitData);
    })
}

const addFruit=(req,res)=>{
  let fruitData = req.body;
  const newFruite = new FruitModel({...fruitData});
  newFruite.save();
}

const getData=(req,res)=>{
    let email = req.params.email
    FruitModel.find({ email : email},(error,item)=>{
        res.send(item)
    })
}

const deleteFruit=(req,res)=>{
    let index = req.params.id;
    FruitModel.findByIdAndRemove(index,(error,item)=>{
         FruitModel.find({ },(error,item)=>{
        res.send(item)
    })
    })
}

const updateFruit=(req,res)=>{
    let index = req.params.id;
    let updateData = req.body;
    FruitModel.findByIdAndUpdate(index,{...updateData},(error,item)=>{
         FruitModel.find({ },(error,item)=>{
        res.send(item)
    })
    })
}

module.exports ={getFruit,addFruit,getData,deleteFruit,updateFruit}