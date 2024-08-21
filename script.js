function agregar(valor) {
    document.getElementById('pantalla').value += valor
    console.log(valor);
}

const agregarArrow = (valor) => {
    console.log(valor, ' Esto es agregar con arrow function');
}

function borrar() {
    document.getElementById('pantalla').value = ' '
    console.log("Se borro los datos en la calculadora");
}


// arrow function

const calcular = () => {
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla)

    document.getElementById('pantalla').value = resultado
}

function resultado() {
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla)

    document.getElementById('pantalla').value = resultado
}

