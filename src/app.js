/* eslint-disable */

import "bootstrap";

import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var simbolo = ["♥", "♠️", "♣️", "♦"];
var numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let arriba = document.querySelector(".simboloArriba");
let valor = document.querySelector(".numero");
let abajo = document.querySelector(".simboloAbajo");

function cartaAleatoria(simbolos, numeros) {
  let carta = [];
  carta.push(simbolos[Math.floor(Math.random() * simbolos.length)]);
  carta.push(numeros[Math.floor(Math.random() * numeros.length)]);
  return carta;
}
function asignarColor(arr) {
  if (arr[0] == "♥" || arr[0] == "♦") {
    arriba.style.color = "red";
    abajo.style.color = "red";
  } else {
    arriba.style.color = "black";
    abajo.style.color = "black";
  }
}
function asignarValor(arr) {
  valor.innerHTML = arr[1];
  arriba.innerHTML = arr[0];
  abajo.innerHTML = arr[0];
}
function generaCarta() {
  let carta = cartaAleatoria(simbolo, numero);
  asignarColor(carta);
  asignarValor(carta);
}
window.onload = function() {
  generaCarta();
};
