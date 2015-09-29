//File: controllers/libros.js
var mongoose = require('mongoose');
var schema= require('../schema');
var Libros  = schema.objLibro;

//GET - Return all libros in the DB
exports.findAllLibros = function(req, res) {
    Libros.find(function(err, libros) {
    if(err) res.send(500, err.message);

    console.log('GET /libros')
    res.header("Access-Control-Allow-Origin", "*");
        res.status(200).jsonp(libros);
    });
};


//GET - Return a Libro with specified ID
exports.findById = function(req, res) {
    Libros.findById(req.params.id, function(err, libro) {
    if(err) return res.send(500, err.message);

    console.log('GET /libro/' + req.params.id);
    res.header("Access-Control-Allow-Origin", "*");
        res.status(200).jsonp(libro);
    });
};


//POST - Insert a new Libro in the DB
exports.addLibro = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var libro = new Libros({
        titulo:    req.body.titulo,
        año:     req.body.año,
        pais:  req.body.pais,
        isbn:   req.body.isbn,
        paginas:  req.body.paginas,
        portada:    req.body.portada,
        autor:    req.body.autor,
        genero:    req.body.genero,
		descripcion:  req.body.descripcion
    });

    libro.save(function(err, libro) {
        if(err) return res.send(500, err.message);
    res.status(200).jsonp(libro);
    });
};



//PUT - Update a register already exists
exports.updateLibro = function(req, res) {
    Libros.findById(req.params.id, function(err, libro) {
        libro.titulo   = req.body.titulo;
        libro.año    = req.body.año;
        libro.pais = req.body.pais;
        libro.isbn  = req.body.isbn;
        libro.paginas = req.body.paginas;
        libro.genero   = req.body.genero;
        libro.descripcion = req.body.descripcion;

        libro.save(function(err) {
            if(err) return res.send(500, err.message);
      res.status(200).jsonp(libro);
        });
    });
};


//DELETE - Delete a Libro with specified ID
exports.deleteLibro = function(req, res) {
    Libros.findById(req.params.id, function(err, libro) {
        libro.remove(function(err) {
            if(err) return res.send(500, err.message);
      res.status(200);
        })
    });
};