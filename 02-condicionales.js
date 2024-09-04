/*
if(<condición>){
    <bloque> 1
}else if(<consdición>){
    <bloque> 2
}else{
    <bloque> 3
}

operadores lógicos

AND &&
OR ||
NOT !

operadores de comparación

IGUAL ==
IGUAL Y DEL MISMO TIPO ===
DISTINTO != o !==

MAYOR >
MENOR <
MAYOR Y IGUAL >=
MENOR Y MENOR <=

switch(<variable>){
    case <val 1>:
        bloque 1
    case <vall 2>
        boque 2
    break;
} 


*/

console.log("condicional con if");
let color = "rojo";

if (color === "Azul") {
    console.log("es el color azul");
} else if (color === "rojo") {
    console.log("es el color rojo");
} else {
    console.log("No es ningún color");
}

console.log("condicional con switch");

switch (color) {
    case "Azul":
        console.log("es el color azul");
        break;
    case "rojo":
        console.log("es color rojo");
        break;
    case "naranja":
        console.log("es color naranja");
        break;
}

let operador = "-"
let valorUno = 7
let valorDos = 2

switch (operador) {
    case "+":
        console.log("el resultado de la suma es: ", valorUno + valorDos)
        break;
    case "-":
        console.log("el resultado de la resta es: ",valorUno - valorDos)
        break;
    default:
        break;
}

