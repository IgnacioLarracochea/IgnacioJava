//guardar usuario y contraseña en local storage y luego interactuar con el DOM

const btn = document.getElementById("guardar");
//inputs
const emailValue = document.getElementById("email");
const passwordValue = document.getElementById("contraseña");
//mostrar
const Mostrar = document.getElementById("Mostrar");
//error
const ErrorEmail = document.getElementById("error_email");
const ErrorPassword = document.getElementById("error_password");
//
btn.innerText = "Registrar";

btn.addEventListener("click", (e) => {
  const email = emailValue.value;
  const password = passwordValue.value;
  e.preventDefault;
  Save(email, password);
});

//funcon de guardado o de muestra de errores
function Save(email, password) {
  if ((email === "" && password === "") || password === "" || email === "") {
    //error
    ErrorEmail.innerHTML = "*Error";
    ErrorEmail.style.color = "Red";
    ErrorEmail.style.display = "flex";
    ErrorEmail.style.fontSize = "16px";
    ErrorEmail.style.fontWeight = "bolder";
    //
    ErrorPassword.innerHTML = "*Error";
    ErrorPassword.style.color = "Red";
    ErrorPassword.style.display = "flex";
    ErrorPassword.style.fontSize = "16px";
    ErrorPassword.style.fontWeight = "bolder";
    Mostrar.innerHTML = "";
    return;
  } else {
    ErrorEmail.innerHTML = "";
    ErrorPassword.innerHTML = "";
    //
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", password);
    //
    Mostrar.innerHTML = "Felicidades por registrarse exitosamente!!";
    Mostrar.style.textAlign = "center";
    Mostrar.style.fontSize = "18px";
    Mostrar.style.fontWeight = "bolder";
    Mostrar.style.color = "#3fd323";
  }
}
