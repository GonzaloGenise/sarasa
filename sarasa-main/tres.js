function mostrar() {
	let res;
	let tipo;
	let origen;
	let precio;
	// punto a
	let acumMun = 0;
	let acumRom = 0;
	let acumPel = 0;
	let masJug;
	// punto b
	let contJugImp = 0;
	let contTotal = 0;
	// punto c
	let recaudacion = 0;
	//  punto d
	let rompeNacional = 0;
	// punto e
	let iva = 21 / 100;

	do {
		tipo = prompt("Ingrese el tipo de juguete.").toLowerCase();
		while (!(tipo == "muñeca" || tipo == "rompecabezas" || tipo == "pelota")) {
			tipo = prompt("Ingrese el tipo de juguete válido.").toLowerCase();
		}
		origen = prompt("Ingrese el origen del juguete.").toLowerCase();
		while (!(origen == "nacional" || origen == "importado")) {
			origen = prompt("Ingrese el origen del juguete válido.").toLowerCase();
		}
		precio = parseFloat(prompt("Ingrese el precio del juguete."));
		while (isNaN(precio) || precio < 1000 || precio > 5000) {
			precio = parseFloat(prompt("Ingrese el precio del juguete válido."));
		}
		if (tipo == "muñeca") {
			acumMun++;
		} else if (tipo == "pelota") {
			acumPel++;
		} else {
			acumRom++;
		}

		if (origen == "importado") {
			contJugImp++;
		}
		contTotal++;
		recaudacion += precio;

		if (precio > rompeNacional) {
			rompeNacional = precio;
		}

		res = prompt("Desea continuar? 's/n'");
	} while (res == 's');

	if (acumRom > acumMun && acumRom > acumPel) {
		masJug = "Rompecabezas";
	} else if (acumMun > acumRom && acumMun > acumPel) {
		masJug = "Muñecas";
	} else {
		masJug = "Pelotas";
	}
	document.write("a- El tipo de juguete mas vendido es " + masJug + "<br>");
	document.write("b- El promedio de precio de los juguetes importados es " + contJugImp / contTotal + "<br>");
	document.write("c- La recaudacion total es " + recaudacion + "<br>");
	document.write("d- El precio del rompecabezas nacional mas barato es " + rompeNacional + "<br>");
	document.write("d- IVA: " + recaudacion * iva);

}
