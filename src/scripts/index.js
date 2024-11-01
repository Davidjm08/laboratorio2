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