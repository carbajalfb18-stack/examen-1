function Calcular() {
    let precio = parseFloat(document.getElementById("precio").value);
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    let cuotas = parseFloat(document.getElementById("cuotas").value);

    let total = precio * cantidad;
    let monto = total / cuotas;
    

    document.getElementById("resultado").innerHTML = `
    Total de la compra: S/${total} <br>
    Numero de cuotas: ${cuotas} <br>
    <strong>Monto de cada cuota S/${monto.toFixed(2)} </strong>
    `




}