const jsdom = require('jsdom');
const { JSDOM } = jsdom;
let dom = new JSDOM('<!DOCTYPE html><html lang="en"><body><div class="row"><div class="col-md-12 contenedor-header"><p id="demo">DEMO</p><h1 class="titulo">Libreria-Editoria</h1></div></div><div class="buttons"><div class="row"><input type="button" onClick="tamano();" value="Cambiar el tamaño a 400px"><input type="button" onClick="tamano2();" value="Cambiar el tamaño a 200px"><input type="button" onClick="tamano3();" value="Cambiar el tamaño a 100px"></div></div><div id="img-contenedor" style="border:1px solid #000000"><img id="img1" src="assets/images/image1.jpg" style="width:100%" alt=""><img id="img2" src="assets/images/image2.jpg" style="width:100%" alt=""><img id="img3" src="assets/images/image3.jpg" style="width:100%" alt=""></div><br></body></html>');
const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
 userAgent: 'node.js',
};


const $ = require('jquery');

describe('testiando html',() =>{
it('passes cuando el body tiene hijos', function(){
	$('#img1').attr('src') !== '';
});
it('passes cuando el body tiene hijos', function(){
	$('input').attr('type') === 'button';
});
it('passes cuando el body tiene hijos', function(){
	$('input').attr('value') !== '';
});
})
