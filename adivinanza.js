// esta variable es para generar un número random del 1 al 100
let numAzar = Math.floor(Math.random() * 100) + 1;
// obtenemos el número que ingresa el usuario
let numEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
let intentos = 0;

function chaquearResultado() {
    intentos ++;
    intento.textContent = `El Números de intentos: ${intentos}`;

    let numIngresado = parseInt(numEntrada.value);

    if(numIngresado < 1 || numIngresado > 100 || isNaN(numIngresado) ){
        mensaje.textContent = "Ingrese un número valido del 1 al 100";
        mensaje.style.color = "blue";
        return
    }

    if(numIngresado === numAzar ) {
        mensaje.textContent = "¡Felicitaciones has ganado!";
        mensaje.style.color = 'green';
        mensaje.disabled = true;
    }else if (numIngresado < numAzar){
        mensaje.textContent = "¡el número es mayor al que pusiste!";
        mensaje.style.color = 'red';
    }else {
        mensaje.textContent = "¡El número es menor al que pusiste!";
        mensaje.style.color = 'red';
    }

}

function fizzBuzz() {
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0  && i % 5 === 0){
            console.log("FizzBuzz");
        }else if(i % 3 === 0){
            console.log("Fizz");
        }else if(i % 5 === 0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
    
}

