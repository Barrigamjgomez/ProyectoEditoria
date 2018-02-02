# Editoria

 **Editoria** es una librería que permite redimensionar el tamaño de las imáganes en diferentes porcentajes.


## Características

- Utiliza el evento click
- Redimensiona el tamaño de una o varias imágenes a la vez
- Permite trabajar con cualquier extensión de imagen (dado que la función se aplica al div que contiene la imagen)



## Uso

Para utilizar esta librería es necesario que tengas un conocimiento básico de html:

1.El primer paso es tener claro las imágenes que vas a utilizar y tenerlas almacenada en la carpeta de imágenes del proyecto.
 2. Luego debes reemplazar la ruta de la imagen
 3. Y preocuparte de que la imagen o la galería de imágenes estén contenidas dentro de un ***div*** con el ***id="img-contenedor"***


     <div id="img-contenedor">
        	<img id="img1" src="aquí va la ruta de la imagen" style="width:100%" alt="">
        </div>

## Especificaciones técnicas

El proyecto se realizó con las siguientes tecnologías:

Herramientas de desarrollo:

- Control de versiones GIT
- mocha v.5.0.0
- jsdom v.11.6.1
- npm v.5.6.0

Herramientas de producción:
- jQuery v.3.2.1
- browserify v.15.2.0
- Bootstrap v4.0


## Instalación

- Usuario debe iniciar su proyecto con el siguiente comando:

    *npm init*

con esto creamos nuestro package.json

- Para instalar carpeta proyectoeditoria se ejecuta el siguiente comando:

    *npm install editoria --save*




## Ejemplo de uso
![enter link description here](https://raw.githubusercontent.com/Barrigamjgomez/ProyectoEditoria/master/assets/images/gif-demo/editoria.gif)



*María José Barriga / Natalia Albornoz*
