
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
.style.width="80%";
}

function tamano2(){
document.getElementById("img-contenedor")
.style.width="70%";
}

function tamano3(){
document.getElementById("img-contenedor")
.style.width="100%";
}
// FIN REDIMENSION IMAGEN
//-------------------------------------
