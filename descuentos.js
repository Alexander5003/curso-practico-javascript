/* const precioOriginal = 120;
const descuento = 18; */

function calcularPrecioConDescuento(percio, descuento) {
    const porcentajePrecioConDescuento = 100-descuento;
    const precioConDescuento = (percio*porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    let precio = document.getElementById('inputPrice');
    let descuento = document.getElementById('inputDiscount');

    let precioValue = precio.value;
    let descuentoValue = descuento.value;

    let precioConDescuento = calcularPrecioConDescuento(precioValue, descuentoValue);

    let PResultado = document.getElementById('ResultP');
    PResultado.innerHTML = `El precio con descuento es de ${precioConDescuento}`;
}

/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
}); */