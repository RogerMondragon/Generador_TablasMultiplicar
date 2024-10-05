// Función para generar la tabla de multiplicar
function generarTablaMultiplicar(numero) {
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = ''; // Limpiar resultados anteriores

    for (let i = 1; i <= 10; i++) {
        const li = document.createElement('li');
        li.textContent = `${numero} x ${i} = ${numero * i}`;
        resultados.appendChild(li);
    }
}

// Evento al hacer clic en el botón
document.getElementById('generar').addEventListener('click', () => {
    const numeroInput = document.getElementById('numero').value;
    const numero = parseInt(numeroInput);

    if (!isNaN(numero)) {
        generarTablaMultiplicar(numero);
    } else {
        alert('Por favor, ingresa un número válido.');
    }
});
