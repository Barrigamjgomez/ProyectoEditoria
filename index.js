$(document).ready(() => {





});
console.log(data);

$('#categorias').on('change', function(){

var accesorio = $('#accesorios');
var cuchillo = $('#cuchillo');
var hornos = $('#hornos');
var ollas = $('#ollas');
	  
	  var selection = $('#categorias').val();


  if (selection === 'accesorios') {
	  for(var i = 0; i < data.length; i++) {
		if(data[i].nombre === 'accesorio') {
		  
		  accesorio.append('<div class="row">' +
													'<div class="col-md-12">' +
														'<img src=" ' + data[i].foto + ' ">'+
														'<p>'+ data[i].nombre + '</p>'+
														'<p>' + data[i].color + '</p>'+
														'<p>'+ data[i].marca + '</p>'+
													'</div>'+
												'</div>');
		}
	  }
  };
});


  if (selection === 'cuchillo') {
	  for (var i = 0; i < data.length; i++) {
		if (data[i].nombre === 'cuchillo') {
		  
		  cuchillo.append('<div class="row">' +
													'<div class="col-md-12">' +
														'<img src=" ' + data[i].foto + ' ">'+
														'<p>'+ data[i].nombre + '</p>'+
														'<p>' + data[i].color + '</p>'+
														'<p>'+ data[i].marca + '</p>'+
													'</div>'+
												'</div>'
										 )
		}
	  }
  }


});

