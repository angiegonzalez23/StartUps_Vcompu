var usuarios = [
  "Aldo Marcelo García Coc",
  "Ana Sofía Soto López",
  "Ana Sophia Zarat Cabrera",
  "Andrea Noemí Monzón Monzón",
  "Angel Salvador Sarazúa Castellanos",
  "Ayleen Rebeca Amiel González",
  "Cindy Lisbeth Santos Santizo",
  "Hillary Yasmine García Zavala",
  "Jennifer Lucero Escobar Miguel",
  "José Francisco Cux Xicay",
  "Juan Pablo Acajabon Guzman",
  "Kristy Mariel Martinez Martinez",
  "Marlen Seleny de León Pérez",
  "Santiago Ezequiel Vasquez González",
  "Sebastian Borrayo Molineros"
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
