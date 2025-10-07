// a.

const persona = {
	nombre: "Ivan Isay",
	edad: 37, 
	direccion: {
		ciudad: "Qro",
		pais: "MX"
	}
};

const { nombre, edad, direccion: { ciudad } } = persona;
const mensaje = `Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`;
console.log(mensaje);
