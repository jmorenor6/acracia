var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello World!");
});

app.use(router);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});

var LibroCtrl = require('./controllers/libros');

// API routes
var libros = express.Router();

app.get('/libros/',LibroCtrl.findAllLibros);
app.get('/libro/:id/',LibroCtrl.findById);
app.post('/libro/',LibroCtrl.addLibro);
app.put('/libro/:id/',LibroCtrl.updateLibro);
app.delete('/libro/:id/',LibroCtrl.deleteLibro);


libros.route('/libros')
  .get(LibroCtrl.findAllLibros)
  .post(LibroCtrl.addLibro);

libros.route('/libros/:id')
  .get(LibroCtrl.findById)
  .put(LibroCtrl.updateLibro)
  .delete(LibroCtrl.deleteLibro);

app.use('/api', libros);