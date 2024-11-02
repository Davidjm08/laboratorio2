function evaluarCalificacion() {
    let calificacion = parseInt(document.getElementById('calificacion1').value);
    let mensaje;

    if (calificacion >= 90) {
        mensaje = "Aprobado con honores";
    } else if (calificacion >= 70) {
        mensaje = "Aprobado";
    } else {
        mensaje = "Reprobado";
    }
    document.getElementById('resultado').innerText = mensaje;
}

function si_es_par_o_inpar() {
    let numero = parseInt(document.getElementById('num1').value);
    let mensaje;

    if (numero % 2 === 0) {
        mensaje = "El número es par";
    } else {
        mensaje = "El número es impar";
    }
    document.getElementById('resultado').innerText = mensaje;
}

function evaluarDescuento() {
    let monto = parseFloat(document.getElementById('monto').value);
    let mensaje;

    if (monto > 100) {
        let montoFinal = monto * 0.90; 
        mensaje = "Monto final a pagar: $" + montoFinal.toFixed(2);
    } else {
        mensaje = "Monto final a pagar: $" + monto.toFixed(2); 
    }

    document.getElementById('resultado').innerText = mensaje;
}
function adivinarNumero() {
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    let adivinanza = parseInt(document.getElementById('adivinanza').value);
    let mensaje;

    if (adivinanza === numeroAleatorio) {
        mensaje = "¡Felicidades, adivinaste el número!";
    } else {
        mensaje = "Lo siento, el número era " + numeroAleatorio;
    }

    document.getElementById('resultado').innerText = mensaje;
}
function calcularSuma() {
    const numeros = [10, 20, 30, 40, 50];
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    const promedio = suma / numeros.length; // Para calcular el promedio
    document.getElementById('resultado').innerText = 
        "Suma total: " + suma + " - Promedio: " + promedio.toFixed(2);
}
// Respuesta: Para calcular el promedio de los números, se divide la suma total entre la cantidad de elementos en el arreglo.

// Bucle while para solicitar números hasta un negativo
function solicitarNumero() {
    let numero;
    while (true) {
        numero = parseInt(prompt("Ingrese un número (ingrese un número negativo para salir):"));
        if (numero < 0) break;
    }
    document.getElementById('resultado').innerText = "Número negativo ingresado. Fin del bucle.";
}
// Respuesta: Si se inicializa el contador con un valor negativo, el bucle `while` no se ejecutará si la condición depende de un valor positivo inicial.

// Bucle do...while para pedir una contraseña hasta que sea correcta
function pedirContrasena() {
    const contrasenaCorrecta = "12345";
    let contrasena;
    do {
        contrasena = prompt("Ingrese la contraseña:");
    } while (contrasena !== contrasenaCorrecta);
    document.getElementById('resultado').innerText = "Contraseña correcta. Acceso permitido.";
}