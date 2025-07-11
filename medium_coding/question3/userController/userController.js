const express = require('express');
const mongoose = require('mongoose');
const userSchema = require('./userController');

const getreq ('/', (req, res) => {
    res.send('Hello World')
});

module.exports = {getreq, postreq};