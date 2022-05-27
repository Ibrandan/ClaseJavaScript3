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