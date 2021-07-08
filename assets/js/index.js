/*var cant = prompt("cuántos usuarios deseas agregar?", "");

document.write("<div class='container'>");
document.write("<table class ='table table-bordered'>");
document.write("<tr>");
document.write("<th>Nombre</th>");
document.write("<th>Edad</th>");
document.write("<th>Mensage</th>");
document.write("</tr>");

var nombre = "";
var edad = "";
var msj = "";
var bg = "";

for (let inicio = 1; inicio <= cant; inicio++) {
    nombre = prompt("ingrese el nombre", "");
    edad = prompt("ingrese la edad", "");
    msj = "";
    bg = "";

    if (edad < 18) {
        msj = "Usted no puede votar";
        bg = "text-red";

    }
    document.write("<tr>"); //encabezado
    document.write("<td>" + nombre + "</td>"); //contenido
    document.write("<td>" + edad + "</td>");
    document.write("<td>" + msj + "</td>");
    document.write("</tr>");

}
document.write("</table>");
document.write("</div>");

//desafio


document.write("<div class='container'>");
document.write("<table class='table'>");
document.write("<thead class='thead-dark'>");
document.write("<tr>");
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr>");
document.write("</thead>");

//row 1

for (let inicio = 1; inicio < 4; inicio++) {
    var ramo = prompt("Ingrese el ramo", "");
    var promedio = Int(prompt("Ingrese la nota aprobatoria", ""));
    var n1 = prompt("Ingrese la nota 1 del ramo [" + ramo + "]", "");
    var n2 = prompt("Ingrese la nota 2 del ramo [" + ramo + "]", "");
    var n3 = prompt("Ingrese la nota 3 del ramo [" + ramo + "]", "");

    document.write("<tbody>");
    document.write("<tr>");
    //document.write("<th scope='row'></th>");
    document.write("<td>" + ramo + "</td>");
    document.write("<td>" + n1 + "</td>");
    document.write("<td>" + n2 + "</td>");
    document.write("<td>" + n3 + "</td>");
    var promedioNotas = (n1 + n2 + n3) / 3;

    document.write("<td>" + promedioNotas + "</td>");

    document.write("</tr>");

}
*/
$(function() {
    $("#btn-click-name").click(function() {
        var valor = $(this).val();
        if (valor == 'ocultar nombre') {
            $(".name").toggle();
            $(this).val("mostrar nombre");
        }
        if (valor == 'mostrar nombre') {
            $(".name").toggle();
            $(this).val("ocultar nombre");
        }
    })
    $("#btn-click-edad").click(function() {
        var valor = $(this).val();
        if (valor == 'ocultar edad') {
            $(".age").toggle();
            $(this).val("mostrar edad");
        }
        if (valor == 'mostrar edad') {
            $(".age").toggle();
            $(this).val("ocultar edad");
        }
    })
    $("#btn-click").click(function() {
        var valor = $(this).val();
        console.log(valor);
        if (valor == 'Presione Click') {
            $('#modal').on('shown.bs.modal', function() {
                console.log($('#myInput').trigger('focus'));
            })
        }
    })

})