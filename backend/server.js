//import express from 'express';

const express = require('express');
const app = express();

app.get('/api/notes', (req, res) => {
    //delete a note
    res.send('My first API notes ');
});

//Create a note
app.listen(5000, () => {
    console.log('Server is starting on port 5000');
});