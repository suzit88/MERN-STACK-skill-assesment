const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const PORT = 3000;

const app = {express,JSON}


app.listen(PORT, ()=>{
    console.log("Hello World")
});