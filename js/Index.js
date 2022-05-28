/*
//Escribir nombre de Paises en mayuscula
let nombreUsuario = prompt("ingrese su nombre y apellido");
let array = [
  { id: "Argentina", IVA: 0.21 },
  { id: "Brasil", IVA: 0.17 },
  { id: "Chile", IVA: 0.19 },
  { id: "Colombia", IVA: 0.16 },
];


//nombre de usuario diferente a vacio
if (!nombreUsuario == " ") {
  alert("Bienvenido: " + nombreUsuario);
  let numeroDocumento = prompt("ingrese su numero de documento");
  let Edad = prompt("ingrese su edad");
  //si documento es diferente a vacio y es mayor de 18 aÃ±os
  if (!numeroDocumento == " " && Edad >= 18) {
    alert("usted califica para la solicitud de prestamo");
    let pais = prompt("Ingrese su pais de residencia");
    //ingresa un pais y si es diferente a vacio y si no cumple con algun nombre del array
    for (i = 0; i <= array.length; i++) {
      if (pais == array[i].id) {
        let IVA = array[i].IVA;
        let montoElegido = prompt("Ingrese monto deseado a solicitar");
        let precioParse = parseFloat(montoElegido);
        let valorFinal = precioParse * IVA;
        alert("El monto a pagar es: " + valorFinal + " y el IVA es: " + IVA);
      } else if (!pais == array[i].id) {
        alert(
          "recarge la pagina y elija uno de los siguientes paises (Argentina,Brasil,Chile,Colombia)"
        );
      }
    }
  } else {
    alert("Usted no es mayor de edad y no es posible pedir un prestamo");
  }
} else {
  alert("No a ingresado su nombre, por favor recarge la pagina");
}

*/

//Errors
const errorName = document.getElementById("errorName");
const erroDNI = document.getElementById("erroDNI");
const errorEdad = document.getElementById("errorEdad");
const errorPais = document.getElementById("errorPais");
const errorIngreso = document.getElementById("errorIngreso");
//inputs
const nombreValue = document.getElementById("name");
const dniValue = document.getElementById("dni");
const edadValue = document.getElementById("edad");
//inputs en uso
const paisValue = document.getElementById("pais");
const prestamoValue = document.getElementById("prestamo");
//
const datos = document.getElementById("envio");
//
datos.addEventListener("submit", (event) => {
  //
  const nombre = nombreValue.value;
  const dni = dniValue.value;
  const edad = edadValue.value;
  const pais = paisValue.value;
  const prestamo = prestamoValue.value;
  //
  event.preventDefault();
  incomeAccount(nombre, dni, edad, pais, prestamo);
});
//multiplicar ingreso por iva y mostrar en pantalla el resultado (iva y total)
function incomeAccount(nombre, dni, edad, pais, prestamo) {
  if (
    pais === "Selecione Pais" ||
    prestamo === "" ||
    nombre === "" ||
    dni === "" ||
    edad === ""
  ) {
    errorPais.innerHTML = "*Seleccione un pais";
    errorPais.style.color = "Red";
    errorPais.style.display = "flex";
    errorPais.style.fontSize = "16px";
    errorPais.style.fontWeight = "bolder";
    //
    errorName.innerHTML = "*Ingrese su nombre";
    errorName.style.color = "Red";
    errorName.style.display = "flex";
    errorName.style.fontSize = "16px";
    errorName.style.fontWeight = "bolder";
    //
    erroDNI.innerHTML = "*Ingrese su dni";
    erroDNI.style.color = "Red";
    erroDNI.style.display = "flex";
    erroDNI.style.fontSize = "16px";
    erroDNI.style.fontWeight = "bolder";
    //
    errorEdad.innerHTML = "*Ingrese su edad";
    errorEdad.style.color = "Red";
    errorEdad.style.display = "flex";
    errorEdad.style.fontSize = "16px";
    errorEdad.style.fontWeight = "bolder";
    //
    errorIngreso.innerHTML = "*Ingrese un monto";
    errorIngreso.style.color = "Red";
    errorIngreso.style.display = "flex";
    errorIngreso.style.fontSize = "16px";
    errorIngreso.style.fontWeight = "bolder";
  } else {
    errorIngreso.innerHTML = "";
    errorEdad.innerHTML = "";
    erroDNI.innerHTML = "";
    errorName.innerHTML = "";
    errorPais.innerHTML = "";
    const IVA = parseFloat(pais);
    const cuenta = prestamo * IVA;
    document.getElementById("total").value = cuenta.toFixed(2);
    return;
  }
}
