// c.
const personas = [
	{ nombre: "Ana", edad: 22 },
	{ nombre: "Luis", edad: 35 },
	{ nombre: "María", edad: 28 }
];

const personaLuis = personas.find(p => p.nombre === "Luis");
console.log("Resultado de find (Luis):", personaLuis); 
console.log("Listado de personas:");
personas.forEach(({ nombre, edad }) => {
	console.log(`- ${nombre} (${edad} años)`);
});

const totalEdades = personas.reduce((acum, { edad }) => acum + edad, 0);
console.log("Suma total de edades:", totalEdades);
const promedioEdad = totalEdades / personas.length;
console.log("Promedio de edad:", promedioEdad.toFixed(2));