/**
 * Ejercicio Calculadora
 * 
 * 
 * 
 * 
 * @author JOSÉ LUIS ÁLVAREZ FERNÁNDEZ
 * FECHA: 7/FEBRERO/2021
 */


function creacionElementos() {

    //creamos la caja div que contendra la calculadora
    let div = document.createElement("div");

    // creación pantalla para despyes mostrar los numeros
    let pantalla = document.createElement("input");
    pantalla.className= "pantalla";
    div.append(pantalla);

    //array que contiene los botones de la calculadora
    let arrayBotones = ["CE", "←", "%", "+", "7", "8", "9", "-", "4", "5", "6", "X", "1", "2", "3", "÷", "0", "±", ",", "="];

    // recorremos el array y creamos cada boton alñadiendolos despues al div
    arrayBotones.forEach(function (e) {
        botones = document.createElement("input");
        botones.setAttribute('type', 'button');
        botones.setAttribute('value', e);
        botones.className= "botones";
        div.append(botones);

    })

    // añadimos todo lo creado en el div al body
    document.body.appendChild(div);

}

function mostrarElementos() {
    creacionElementos();
}

function init() {

    creacionElementos();
}

document.addEventListener("DOMContentLoaded", init);