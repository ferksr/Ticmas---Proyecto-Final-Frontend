
/* Cambiar color de titulos*/

console.log(document.getElementById("colorDeTitulos").value);
console.log(document.getElementById("cambiarColor").innerHTML);
document.getElementById("cambiarColor").addEventListener("click", fnCambiarColor);

function fnCambiarColor() {
  let valorColorDeTiutlos = document.getElementById("colorDeTitulos").value
  console.log(valorColorDeTiutlos);
  const collection = document.getElementsByTagName("h2");
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.color = valorColorDeTiutlos;
  }
}


/* Visitas al sitio */

if (localStorage.cantidadDeIngresos) {
  let cantidadDeIngresos = localStorage.cantidadDeIngresos;
  cantidadDeIngresos++;
  localStorage.cantidadDeIngresos = cantidadDeIngresos;
  document.getElementById("contadorDeIngresos").innerHTML = "Se ingresó al sitio "+cantidadDeIngresos+" veces";
} else {
  let cantidadDeIngresos = 1;
  localStorage.cantidadDeIngresos = cantidadDeIngresos;
  document.getElementById("contadorDeIngresos").innerHTML = "Se ingresó al sitio "+cantidadDeIngresos+" vez";
}


/* Última visita */

if (localStorage.ultimaVisita == undefined) {
    document.getElementById("ultimaVisita").innerHTML = "Primer visita";
    console.log("Primer visita" + localStorage.ultimaVisita);
  } else {
    document.getElementById("ultimaVisita").innerHTML = "Ultima visita: " + localStorage.ultimaVisita;
  }
let currentdate = new Date(); 
let datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " @ "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();
localStorage.ultimaVisita = datetime;


/* Json */

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let firstName;
let lastName;
let email;
let phoneNumber;

function getData() {
  let val = getRandomInt(8) + 1;
  let user = "https://dummyjson.com/users/" + val;
  console.log(user);
  return fetch(user)
    .then(response => response.json())
    .then(data => {
      firstName = data.firstName;
      lastName = data.lastName;
      email = data.email;
    });
}

getData().then(() => {
  document.getElementById("Nombre").innerHTML = "Nombre: "+ firstName + " " + lastName;
  document.getElementById("Email").innerHTML = "Email: "+ email;
});