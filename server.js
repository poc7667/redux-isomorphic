import fs from 'fs';
import express from 'express';
import React from 'react';

//import ContactApp from './app/components/ContactApp.jsx';

const app = express();

app.set('views', './');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.render('index', {
        content: 'Hello World'
    });
});

app.listen(process.env.PORT || 1234, process.env.IP);
