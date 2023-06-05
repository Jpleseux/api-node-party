const mongoose = require("mongoose")

const Schema = mongoose

const {ServiceSchema} = require("./Services")

const party = new Schema({
   title: {
    type: String,
    required: true
   },
   author: {
    type: String,
    required: true
   },
    description: {
    type: String,
    required: true
   },   
   budget: {
    type: Number,
    required: true
   },   
   image: {
    type: String,
    required: true
   },   
   services: {
    type: [ServiceSchema],
   },
    
},{timestamp: true} )

const Party = mongoose.model("Party", party)

module.exports = Party