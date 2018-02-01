
//Eventos -----------------------------------------------------------
//aqui creamos un evento el cúal con document... llamamos al boton() 
//que se encuentra en el input del html y con .EventListener le damos 
//el evento al boton con la funcion click, que quiere decir que al 
//momento de hacer click se ejecute el tamano.-

document.getElementById("button").addEventListener("click", function(){
	tamano(); 
});
document.getElementById("button1").addEventListener("click", function(){
	tamano2();
});
document.getElementById("button2").addEventListener("click", function(){
	tamano3();
});
// FIN EVENTOS
//--------------------------------------------------------------------

//Funciónes
//Redimensión de Imagenes 
//Aqui encontramos 3  funciones diferentes , las cúal con document,get...llamamos a la imagen
//que está contenida en un ID dentro de un div en el html, la función redimensiona
//la imagen afectando las medidas del ID original y entregando la nueva medida con el evento
//que indicamos arriba 

function tamano(){ 
	document.getElementById("img-contenedor").style.width="400px";
}

function tamano2(){
	document.getElementById("img-contenedor").style.width="200px";
}

function tamano3(){
document.getElementById("img-contenedor").style.width="100px";
}

// FIN REDIMENSION IMAGEN
//---------------------------------------------------------------------
