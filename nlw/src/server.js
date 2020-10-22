// import dependency
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

console.log(pages)

// starting express
const server = express()
server
    // use req body
    .use(express.urlencoded({ extended: true }))
    // using static files 
    .use(express.static('public'))

    // configure template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // routes of aplication
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)


// turn on the server 
server.listen(5500)