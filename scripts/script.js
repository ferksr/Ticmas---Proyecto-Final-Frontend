
/* Cambiar color de titulos*/

document.getElementById("cambiarColor").addEventListener("click", fnCambiarColor);

function fnCambiarColor() {
  let valorColorDeTiutlos = document.getElementById("colorDeTitulos").value
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


/* Geolocalizacion */

document.getElementById("geoLocalizacion").addEventListener("click", geolocalizar);

function geolocalizar() {
  navigator.geolocation.getCurrentPosition(success, error, options);
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  const crd = pos.coords;

  document.getElementById("latitud").innerHTML = "Latitud : "+ crd.latitude;
  document.getElementById("latitud").style.display = "list-item";
  document.getElementById("longitud").innerHTML = "Longitud : "+ crd.longitude;
  document.getElementById("longitud").style.display = "list-item";
  document.getElementById("precision").innerHTML = "Precision : "+ crd.accuracy + " metros";
  document.getElementById("precision").style.display = "list-item";
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
  document.getElementById("latitud").innerHTML = err.code;
  document.getElementById("latitud").style.display = "list-item";
  document.getElementById("longitud").innerHTML = err.message;
  document.getElementById("longitud").style.display = "list-item";
  document.getElementById("precision").style.display = "none";
}






