const express = require("express")
const { default: mongoose } = require("mongoose")

const userSchema = new mongoose.Schema({
     name: { 
        type: String, 
        required: true
    },
     email: { 
        type: String, 
        required: true,
         unique: true
        },

     address: {
        type: String,
        require:true,
     },

     Password: {
        type: String,
        require: true,
     }
});

module.exports = userSchema;