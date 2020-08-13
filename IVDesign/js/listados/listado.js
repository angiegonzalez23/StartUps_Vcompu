var usuarios = [
  "Diego Alexander Barrios Hernández",
  "Fernando Javier Luch Contreras",
  "José Pablo Mejia Galiano",
  "Joselyn Gabriela Andrea Xajil Cuy",
  "Katherine Michelle Alvarado Garcia",
  "Keiry Anaí Guadalupe Juárez Erazo",
  "Natalie Noemí Zamora Santizo",
  "Susan Andrea Ramos Aguilar",
  "Rafael Andree de León Ramirez"
];
var direccionGeneral = "user";

var estrella = [];

var noProyectos = [];

function mostraLista() {
  var cajaUsuarios = document.querySelector("#tabla");

  usuarios.forEach(function(elemento, indice) {
    var fila = document.createElement("div");

    fila.innerHTML =
      '<div id="colum0" class="colum0">' +
      indice +
      "</div>" +
      '<a href="' +
      direccionGeneral +
      indice +
      '.html ">' +
      '<div id="user0" class="user">' +
      elemento +
      "</div>" +
      "</a>" +
      '<div id="colum2" class="colum2"></div>' +
      '<div id="colum3" class="colum3"></div>';

    cajaUsuarios.appendChild(fila);
  });
}
mostraLista();
