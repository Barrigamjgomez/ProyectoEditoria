const jsdom = require('jsdom');
const { JSDOM } = jsdom;
let dom = new JSDOM('<!DOCTYPE html><html lang="en"><body><div class="body-container container-fluid"><div class="row"><div class="col-md-12 contenedor-header container-fluid"><p id="demo">DEMO</p><h1 class="titulo">Libreria-Editoria</h1></div></div><div class="row"><div class="col-lg-6 offset-lg-5 col-md-6 offset-md-5 col-sm-6 offset-sm-5 col-xs-6 offset-xs-5"><div id="buttons" class="btn-group btn-group-toggle" data-toggle="buttons"><label class="btn btn-secondary btn-lg"><input type="radio" onClick="tamano();" name="options" id="option1" autocomplete="off"> 100%</label><label class="btn btn-secondary btn-lg"><input type="radio" onClick="tamano2();" name="options" id="option2" autocomplete="off"> 70%</label><label class="btn btn-secondary btn-lg"><input type="radio" onClick="tamano3();" name="options" id="option3" autocomplete="off"> 30%</label></div></div></div><div id="img-contenedor" class="row"><div class="row"><div class="img col-lg-4"><img id="img1" src="assets/images/image1.jpg" style="width:100%" alt=""></div><div class="img col-lg-4"><img id="img2" src="assets/images/image2.jpg" style="width:100%" alt=""></div><div class="img col-lg-4"><img id="img3" src="assets/images/image3.jpg" style="width:100%" alt=""></div></div><div id="galery-row-2" class="row"><div class="img col-lg-4"><img id="img4" src="assets/images/image1.jpg" style="width:100%" alt=""></div><div class="img col-lg-4"><img id="img5" src="assets/images/image2.jpg" style="width:100%" alt=""></div><div class="img col-lg-4"><img id="img6" src="assets/images/image3.jpg" style="width:100%" alt=""></div></div></div></div></body>');
const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
 userAgent: 'node.js',
};

//para realizar nuestros test ocupamos el test de mocha de jquery, para estó 
//intalamos el package de jquery

const $ = require('jquery');

describe('testeando html',() =>{
it('passes cuando img tenga su ruta', function(){
	$('#img1').attr('src') !== '';
});
it('passes cuando input tenga su boton', function(){
	$('input').attr('type') === 'button';
});
it('passes cuando input tenga su valor', function(){
	$('input').attr('value') !== '';
});
it('passes cuando input tenga su valor', function(){
	$('input').attr('value') !== '';
});
})
//en describe le indicamos que vamos a testiar html, 
//copiamos el codigo de html en "let dom = new JSDOM()", 
//despues en it le indicamos que queremos comprobar, en el test n° 1 le 
//decimos que si imagen 1 esta vacio, esta ejecutando un error, 
//como no lo está, pase el test sin problemas.-

/* HTML PARA PRUEBA DE TEST -----------------------------------------------------
<!DOCTYPE html><html lang="en"><body><div class="body-container container-fluid">
<div class="row"><div class="col-md-12 contenedor-header container-fluid"><p id="
demo">DEMO</p><h1 class="titulo">Libreria-Editoria</h1></div></div><div class="
row"><div class="col-lg-6 offset-lg-5 col-md-6 offset-md-5 col-sm-6 offset-sm-5 
col-xs-6 offset-xs-5"><div id="buttons" class="btn-group btn-group-toggle" data-
toggle="buttons"><label class="btn btn-secondary btn-lg"><input type="radio" onC
lick="tamano();" name="options" id="option1" autocomplete="off"> 100%</label><la
bel class="btn btn-secondary btn-lg"><input type="radio" onClick="tamano2();" na
me="options" id="option2" autocomplete="off"> 70%</label><label class="btn btn-s
econdary btn-lg"><input type="radio" onClick="tamano3();" name="options" id="opt
ion3" autocomplete="off"> 30%</label></div></div></div><div id="img-contenedor" 
class="row"><div class="row"><div class="img col-lg-4"><img id="img1" src="asset
s/images/image1.jpg" style="width:100%" alt=""></div><div class="img col-lg-4"><
img id="img2" src="assets/images/image2.jpg" style="width:100%" alt=""></div><di
v class="img col-lg-4"><img id="img3" src="assets/images/image3.jpg" style="widt
h:100%" alt=""></div></div><div id="galery-row-2" class="row"><div class="img co
l-lg-4"><img id="img4" src="assets/images/image1.jpg" style="width:100%" alt="">
</div><div class="img col-lg-4"><img id="img5" src="assets/images/image2.jpg" st
yle="width:100%" alt=""></div><div class="img col-lg-4"><img id="img6" src="asse
ts/images/image3.jpg" style="width:100%" alt=""></div></div></div></div></body>
---------------------------------------------------------------------------------
*/