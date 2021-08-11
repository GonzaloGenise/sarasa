// Se necesita llevar la gestión de una veterinaria. Para ello se podrán registrar los datos de cada mascota mientras el usuario quiera.
// De cada mascota se solicita:
// -nombre (entre 3 y 8 caracteres)
// -tipo (“mamifero”, “ave”, “reptil”)
// -sangre ( "fria", "calida")
// Si es de tipo reptil solo puede tener sangre fria
// -edad ( mayor a cero)
// -sexo( “m” de macho o “h” de hembra )
// Informar:
// a- Promedio de edad de los reptiles
// b- tipo y sexo de la mascota mas joven
// c- Del total de mascotas que porcentaje son aves
// d- De que tipo de mascota hay mas cantidad
function mostrar() {
 let nombre;
 let tipo;
 let sangre;
 let edad;
 let sexo;
let contTotal = 0;
//  punto a
 let contReptiles = 0;
 let acumEdadReptiles = 0;
 let promEdadReptiles = 0;

  let edadReptilMenor;
	let tipoReptilMenor;
	let sexoReptilMenor;
	let flagReptil = 1;
// punto b
let edadMascotaMenor;
let tipoMascotaMenor;
let sexoMascotaMenor;
let flagMascota = 1;


// punto c

let contAve = 0;
let porcAve = 0;

// punto d
let contMascant;
let MascotaMascant;
let contMamifero = 0;


do{
  
  contMamifero++;
 
  contTotal++;

  nombre = prompt("Ingrese el nombre(entre 3 y 8 caracteres)").toLowerCase();
  while(nombre.length <= 3 || nombre.length >= 8) {	

  nombre = prompt("Error. Ingrese el nombre(entre 3 y 8 caracteres)").toLowerCase();
  }
  tipo = prompt("Ingrese el tipo(mamifero/ave/reptil)").toLowerCase();
		while(tipo != "mamifero" && tipo != "ave" && tipo != "reptil" ) {
     

			tipo = prompt("Error. Ingrese el tipo(mamifero/ave/reptil)").toLowerCase();
		}
    sangre = prompt("Ingrese la sangre(fria/calida)").toLowerCase();
		while(sangre !=  "fria" && sangre != "calida" ) {

			sangre = prompt("Error. Ingrese la sangre(fria/calida)").toLowerCase();
    }
    
    while(tipo == "reptil" && sangre == "calida"){
      sangre = prompt("Error. Reptil debe ser sangre fría.");
      }
      edad = parseInt(prompt("Ingrese su edad"));

      while(isNaN(edad) || edad < 1){
  
      edad = parseInt(prompt("Error. Ingrese su edad"));
        }

        sexo = prompt("Ingrese el sexo (m/f)");
		while(sexo != "m" && sexo !="f") {

			prompt("Error Ingrese el sexo (m/f)");
		}

    
    if (tipo == "reptil") {
      contReptiles++;
      acumEdadReptiles += edad
      
    
    }if(tipo == "reptil"){
      if (flagReptil || edad > edadReptilMenor){
        edadReptilMenor = edad;
        sexoReptilMenor = sexo;
        tipoReptilMenor = tipo;
        flagReptil = 0;
      }
    }
      if (flagMascota || edad > edadMascotaMenor){
        edadMascotaMenor = edad;
        tipoMascotaMenor = tipo;
        sexoMascotaMenor = sexo
        flagMascota = 0;
      }

      if(tipo == "ave"){
        contAve++;
        
      }

        
      

  res = prompt("Quiere continuar? (s/n)").toLowerCase();
  while(!(res == 's' || res == 'n')){
    res = prompt("Ingrese 's' si desea continuar, o 'n' si no").toLowerCase();
  }
  }while(res == 's');
  //////////////////////////////////////////////////////////////////////////////////////



  if( contAve >  contReptiles && contAve  > contMamifero ){

    MascotaMascant = "ave";
    contMascant = contAve;
  }
  else if (contReptiles >= contAve && contAve > contMamifero ){
  
    MascotaMascant = "reptil";
    contMascant = contReptiles;
  
  }else {
   MascotaMascant = "mamifero";
    contMascant = contMamifero ;
  }

  if(contReptiles != 0){
    promEdadReptiles = acumEdadReptiles / contReptiles ;
  }

 contAve = contAve * 100 / contTotal;
  
    
  

 
    document.write("a- el promedio de edad de los reptiles es " + promEdadReptiles +"<br>");

if(flagMascota){

	document.write(" No se ingresaron Mascotas <br>");
 }else{
	 document.write("  La mascota mas joven es un  " + tipoMascotaMenor + " y es de sexo  " + sexoMascotaMenor + "<br>" );
 }
 document.write (" Del total de las mascotas el "+ porcAve+ " son aves" + "<br>" );
 
 document.write(" el total de las aves es  "+ MascotaMascant + "con "+ contMascant + "<br>");

  }



 