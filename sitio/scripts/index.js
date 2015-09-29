
$.ajax({
  url: "http://localhost:3000/libros",
  success: function( data ) {
   $('#texto').append($('<h2>').html(data[0].pais)
   	).append($('<h2>').html(data[0].titulo)
   	).append($('<h2>').html(data[0].descripcion)
   	).append($('<h2>').html(data[0].autor)
   	);
  }
});
