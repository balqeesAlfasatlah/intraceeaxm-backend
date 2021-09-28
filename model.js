'use strict';
const mongoose = require('mongoose');

class Fruits {

    constructor(items){
        this.image = items.image;
        this.name = items.name;
        this.price = items.price;
    }
}

const FruiteSchema = new mongoose.Schema({
    email : String ,
    image : String ,
    name: String,
    price :String ,
  });

  const FruitModel = mongoose.model('FruiteCollection', FruiteSchema);

module.exports={Fruits ,FruitModel}

