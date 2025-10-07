// b.

const productos = [
	{ nombre: "Laptop", precio: 12000 },
	{ nombre: "Mouse", precio: 250 },
	{ nombre: "Teclado", precio: 750 },
	{ nombre: "Monitor", precio: 3000 }
];

const costosos = productos.filter(p => p.precio > 1000);

const nombres = costosos.map(p => p.nombre);

console.log(nombres);