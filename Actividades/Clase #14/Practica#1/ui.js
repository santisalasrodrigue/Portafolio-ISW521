export function mostrarPedido(pedido){

    console.log(
        `Pedido creado para ${pedido.cliente}: ${pedido.producto} - ₡${pedido.precio}`
    );

}

export function mostrarTotal(total){

    console.log(`Total del día: ₡${total}`);

}

export function mostrarEdificio(cliente, edificio){

    console.log(
        `${cliente} se encuentra en: ${edificio ?? "Sin edificio registrado"}`
    );

}

export default function resumenDia(...pedidos) {
  return `${pedidos.map(pedido =>`${pedido.cliente} pidio ${pedido.producto} por ₡${pedido.precio}`)}`;
};