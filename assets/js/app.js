
//Para mostrar las imagenes en la consola
document.getElementById("button").addEventListener("click", function(){
	tamano();
});
document.getElementById("button1").addEventListener("click", function(){
	tamano2();
});
document.getElementById("button2").addEventListener("click", function(){
	tamano3();
});

// INICIO REDIMENSION IMAGEN
function tamano(){
document.getElementById("img-contenedor")
.style.height="400px";
document.getElementById("img-contenedor")
.style.width="400px";
}

function tamano2(){
document.getElementById("img-contenedor")
.style.height="200px";
document.getElementById("img-contenedor")
.style.width="200px";
}

function tamano3(){
document.getElementById("img-contenedor")
.style.height="100px";
document.getElementById("img-contenedor")
.style.width="100px";
}
// FIN REDIMENSION IMAGEN
//-------------------------------------
