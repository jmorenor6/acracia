//npm start
var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    multipart = require("connect-multiparty"),
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



app.get('/libros/',LibroCtrl.findAllLibros);
app.get('/libro/:id/',LibroCtrl.findById);
app.post('/libro/',LibroCtrl.addLibro);
app.put('/libro/:id/',LibroCtrl.updateLibro);
app.delete('/libro/:id/',LibroCtrl.deleteLibro);




app.use(multipart()); //Express 4

app.post('/upload', function(req, res) {
   //El modulo 'fs' (File System) que provee Nodejs nos permite manejar los archivos
   var fs = require('fs')

   var path = req.files.archivo.path
   var newPath = req.files.archivo.name

   var is = fs.createReadStream(path)
   var os = fs.createWriteStream(newPath)

   is.pipe(os)

   is.on('end', function() {
      //eliminamos el archivo temporal
      fs.unlinkSync(path)
   })
   res.send(req.files.archivo);
})