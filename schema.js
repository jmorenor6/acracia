var mongoose= require('mongoose');

var mongooseConnection= mongoose.createConnection('mongodb://user:pass1@ds031893.mongolab.com:31893/virtualbooks');



var libroSchema = new mongoose.Schema({
  titulo:    { type: String },
  año:     { type: Number },
  pais:  { type: String },
  isbn:  { type: String },
  paginas:  { type: Number },
  portada:   { type: String },
  autor:  { type: String },
  genero:    { type: String, enum:
  ['Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy', 'Filosofia']
        },
  descripcion:  { type: String }    
});
var libro =mongooseConnection.model('Libro', libroSchema);

exports.objLibro= libro;