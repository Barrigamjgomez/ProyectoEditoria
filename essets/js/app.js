
$(document).ready(() => {

});

//Este console log sirve para mostrar en la consola del navegador todos los objetos con sus respectivas key y value que se encueta en el arreglo de objetos del archivo data.js

console.log(data);

//-------------------------------------

// Creo las variables que utilizaré y guardo en ellas los div vacios del html donde irá la info sacada de la data
var small = $('#small');
// var medium =$('medium');
// var large = $('large');


// * Utilizamos el evento on change para detectar cualquier cambio
// * de valor en nuestras opciones de select
// * El value lo encontramos designado para cada opción en nuestro html
$('#categorias').on('change', function(){

  // * En la variable selection guardo el value de la opción
  // * escogida en el select

var selection = $('#categorias').val();

// Declaro la primera condición: Si el value seleccionado es igual al string small, entonces itero sobre a longitud de la data y  realizo una condición donde verifico cada uno de los objetos

if (selection === 'small'){
  for (var i = 0; i < data.length; i++) {
    if(data[i].size === 'small') {

      // medium.children().remove();
      // large.children().remove();
      small.append('<div class="row">' + '<div class="col-md-12 text-center">' + '<img src=" ' + data[i].picture + '">' + '</div>' + '</div>')

    }
  }
}

})



// INICIO REDIMENSION IMAGEN
function tamano(){
document.getElementById("div")
.style.height="400px";
document.getElementById("div")
.style.width="400px";
}

function tamano2(){
document.getElementById("div2")
.style.height="200px";
document.getElementById("div2")
.style.width="200px";
}
// FIN REDIMENSION IMAGEN
