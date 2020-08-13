var usuarios = [
  "Abner David Castro Benito",
  "Ada Reneé Tanchez Montenegro",
  "Alisson Daniela Castillo Sosa",
  "Angely Melissa Ramírez Sampuel",
  "Daniel Alejandro Lucero León",
  "Daniela María De la Vega Castillo",
  "Emy Romelia Noemí Chin Monzón",
  "Eunice Jamilet Cux Ramos",
  "Hector Efraín Gómez Castro",
  "Heydi Lizeth Talé Morales",
  "Javier Alejandro Castellanos Duarte",
  "Javier Fabian Pérez Ajcu",
  "José Carlos Calderón Padilla",
  "Londy Daniela Chacon Cortez",
  "Luis Enrique Rodriguez Cifuentes",
  "Marlen Kristel España Ramirez",
  "Mayfiun Joshua Dávila Quevedo",
  "Mónica Sthefany Yojcom Batz",
  "Yulianny Paola Alejandra Rodriguez Ochoa"
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
