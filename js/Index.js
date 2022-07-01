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

const lista = document.querySelector('#listado')
fetch('./data.json')
  .then( (resp) => resp.json() )
  .then( (data) => {
    console.log(data);
      data.forEach((pais) => {
        const li = document.createElement('li')
        li.innerHTML = `
        <h4>${pais.iva.toUpperCase()}</h4>
        <p>pais: ${pais}</p>
        <p>iva: ${iva}</p>
        `
        lista.append(li)
      })
  })
  console.log("Funciona");
