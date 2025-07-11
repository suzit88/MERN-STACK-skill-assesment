const express = require("express");
const { default: mongoose } = require("mongoose")

const userSchema = new mongoose.Schema({
     name: { 
        type: String, 
        required: true
    },
     age: { 
        type: Number, 
        required: true,
        },
});

module.exports = userSchema;