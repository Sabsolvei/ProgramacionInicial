/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
var precioUno = document.getElementById('PrecioUno').value;
var precioDos = document.getElementById('PrecioDos').value;
var precioTres = document.getElementById('PrecioTres').value;

var resultado
resultado = parseInt(precioUno)+ parseInt(precioDos)+ parseInt(precioTres);

alert(resultado);



}

function Promedio () 
{

var precioUno = document.getElementById('PrecioUno').value;
var precioDos = document.getElementById('PrecioDos').value;
var precioTres = document.getElementById('PrecioTres').value;

var resultado = (parseInt(precioUno)+ parseInt(precioDos)+ parseInt(precioTres))/3;

alert(resultado);

}


function PrecioFinal () 
{
	
var precioUno = document.getElementById('PrecioUno').value;
var precioDos = document.getElementById('PrecioDos').value;
var precioTres = document.getElementById('PrecioTres').value;

var resultado = (parseInt(precioUno)+ parseInt(precioDos)+ parseInt(precioTres))*1.21;

alert(resultado);

}