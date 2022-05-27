// function suma(n1,n2){
//     return n1 + n2;
// }

// function resta(n1,n2){
//     return n1 - n2;
// }

// function multiplicacion(n1,n2){
//     return n1 * n2;
// }

// function division(n1,n2){
//     return n1 / n2;
// }

// function cuadradoDe(num){
//     return multiplicacion(num, num)
// }

// function potencia(num, n) {
//     let resultado = 1;
//     for(let i = 0; i < n; i++) {
//         resultado += num;
//     }
//     return resultado;
// }

// function potenciaRec(num, n) {
//     if(n == 0) {
//         return 1;
//     }
//     if(n == 1) {
//         return num;
//     }
//     return num*potenciaRec(num, n-1);
// }

// let rectangulo = {
//     'color' :   'rojo',
//     'alto'  :   '25',
//     'ancho' :   '15',
//     'relleno'   :   'rojo'
// }
// // clave: valor
// // atributo: valor
// let ingresadoPorElUsuario = 'color'

// let variable = null;
// let variable2 = undefined;

function sumar(n1,n2){
    let resultado =0;
    let numeros = preguntarNumero();

    resultado = numeros.n1 + numeros.n2;
    mostrarResultado(resultado);
}

function restar(n1,n2){
    let resultado =0;
    let numeros = preguntarNumero();

    resultado = numeros.n1 - numeros.n2;
    mostrarResultado(resultado);
}

function multiplicar(n1,n2){
    let resultado =0;
    let numeros = preguntarNumero();

    resultado = numeros.n1 * numeros.n2;
    mostrarResultado(resultado);
}

function dividir(n1,n2){
    let resultado =0;
    let numeros = preguntarNumero();

    resultado = numeros.n1 / numeros.n2;
    mostrarResultado(resultado);
}

function preguntarNumero() {
    let primerNum = prompt('Ingrese el primer numero');
    let segundoNum = prompt('Ingrese el segundo numero');

    return {
        "n1":parseFloat(primerNum), "n2":parseFloat(segundoNum)
    }
}

function mostrarResultado(resultado){
    let nodo = document.getElementById("resultado");
    nodo.innerText = resultado;
}