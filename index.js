// Node v18.3.0 doesn't support ES6 import express from 'express'
const express = require("express");
const app = express();

// CORS, if needed
// const cors = require("cors");
// app.use(cors());

const PORT = 8000;

const contacts = {
    'alice': {
        'name': 'Alice',
        'tel': '+1 (404) 1234-100'
    },
    'bob': {
        'name': 'Bob',
        'tel': '+1 (404) 1234-101'
    },
    'chad': {
        'name': 'Chad',
        'tel': '+1 (404) 1234-102'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
})

app.get('/api/:name', (request, response) => {
    const name = request.params.name;
    response.json(contacts[name.toLowerCase()] || {'name': name, 'tel': 'undefined'});
})

app.listen(process.env.PORT || PORT, () => console.log(`Listening port ${PORT}...`));
