function mostrar() {
    let nombre;
    let carrera;
    let sexo; 
    let cantidadMaterias;
    for(let i = 0; i< 500; i++){

    

    nombre = prompt("ingresar nombre");
    while(nombre.length == 0){
    nombre = prompt("Error. ingresar nombre");
    }
    sexo = prompt("Ingrese el sexo (masculino/femenino)");
		while(sexo != "masculino" && sexo !="femenino") {

			prompt("Error Ingrese el sexo (masculino/femenino)");
		}
        

    
    carrera = prompt("ingresar carrera");
    while(carrera != "quimica" && carrera != "fisica" && carrera != "sistemas");
    carrera = prompt("ingresar carrera");

    cantidadMaterias = parseInt(prompt("cantidad de materias?"));
    while(cantidadMaterias > 5 && cantidadMaterias <1)
    cantidadMaterias = parseInt(prompt("cantidad de materias?"));




    }

  
}
// Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
// nombre,
// carrera("Quimica";"Fisica";"Sistemas"),
// sexo (masculino - femenino -no binario),
// cantidad de materias(entre 1 y 5),
// Nota promedio del alumno(entre 0 y 10),
// edad (validar).
// Se debe informar de existir, o informar que no existe , en el caso que corresponda.
// a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
// b) El nombre de la alumna mas joven.
// c) Porcentaje de estudiantes que estudia cada carrera.
// d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.