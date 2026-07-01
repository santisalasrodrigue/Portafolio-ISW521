//Actividades pendientes de clase #13

//Actividad 1

const numeros = [200, 150, 140, 360, 100, 1000];
numeros.sort((a, b) => a - b);
console.log(numeros);

for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}

const declarativo = numeros.map((n) => n);

console.log(declarativo);

//Actividad 2

const precios = [100, 250, 80, 400];
const caros = [];
for(let i = 0; i < precios.length; i++){
    if (precios[i] > 150)
caros.push(precios[i]);
}

const caros = precios.filter((p) => p > 150);

console.log(caros);

//Actividad  4

const estudiantes = [
    {nombre: "Ana", carnet : "2024001"},
    {nombre: "Luis", carnet : "2024002"}
];

const nuevo = estudiantes.map(e => `${e.nombre} (${e.carnet})`.toUpperCase());

console.log(nuevo);

//Actividad  5

const estudiantes = [
    {nombre: "Ana", promedio : 85},
    {nombre: "Luis", promedio : 67},
    {nombre: "Sara", promedio : 91},
];

const nuevo = estudiantes.filter(e => e.promedio >= 80);

console.log(nuevo);

// //Actividad 7

const gastos = [
    { cat: "comida", monto: 5000},
    { cat: "transporte", monto: 2000},
    { cat: "comida", monto: 3000}
];

const sumatoria = gastos.reduce((acc, g) => g.monto, 0);

console.log(sumatoria);

