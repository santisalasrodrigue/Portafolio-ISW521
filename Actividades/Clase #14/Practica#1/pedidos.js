const pedidos = [];

export function crearPedido(
    { cliente, producto, precio, notas },
    ...extras
) {

    const pedido = {
        cliente,
        producto,
        precio,
        notas,
        extras
    };

    pedidos.push(pedido);

    return pedido;
}

export function calcularTotalDia() {

    return pedidos.reduce((total, pedido) => {
        return total + (pedido.precio ?? 0);

        // || sería incorrecto porque un precio de 0 es válido
        // y no debe reemplazarse por otro valor.
    }, 0);

}

export function aplicarDescuento(pedido, porcentaje){

    return {
        ...pedido,
        precio: (pedido.precio ?? 0) - ((pedido.precio ?? 0) * porcentaje / 100)
    };

}

export function obtenerPedidos(){
    return pedidos;
}