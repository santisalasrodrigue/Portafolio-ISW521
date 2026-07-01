import {
    crearPedido,
    calcularTotalDia,
    aplicarDescuento,
    obtenerPedidos
}
from "./pedidos.js";

import resumenPedidos, {
    mostrarPedido,
    mostrarTotal,
    mostrarEdificio
}
from "./ui.js";

const preferenciasCliente = {

    ana: {
        direccion:{
            edificio:"Aulas 3"
        }
    },

    luis:{}

};

const pedido1 = crearPedido(
    {
        cliente:"Ana",
        producto:"Casado",
        precio:2500,
        notas:"Sin cebolla"
    },
    "Queso",
    "Aguacate"
);

const pedido2 = crearPedido(
    {
        cliente:"Luis",
        producto:"Café con pan",
        precio:1200,
        notas:undefined
    },
    "Tortilla extra"
);

mostrarPedido(pedido1);
mostrarPedido(pedido2);

const pedidoConDescuento = aplicarDescuento(pedido1,10);

console.log("Pedido original");
console.log(pedido1);

console.log("Pedido con descuento");
console.log(pedidoConDescuento);

mostrarTotal(calcularTotalDia());

const edificioAna =
    preferenciasCliente.ana?.direccion?.edificio;

const edificioLuis =
    preferenciasCliente.luis?.direccion?.edificio;

mostrarEdificio("Ana", edificioAna);
mostrarEdificio("Luis", edificioLuis);

console.log(
    resumenPedidos(...obtenerPedidos())
);