var usuarios = [
  "Angel Josue Yupe Cardona",
  "Angie Magalí González Aguilar",
  "Carlos Fernando Villatoro López",
  "David Rolando Juárez Ureña",
  "Diego Alejandro Jimenez Gonzalez",
  "Javier Andres Macario Juárez",
  "Jorge Luis López Rosales",
  "Kelly Mishell Alay Sarceño",
  "Marco Andree Mazariegos Pérez",
  "Pili Gery Charlize Escobar Torres",
  "Roberto Carlos Carrillo Yapán",
  "Stephany Marisol Jamileth Ajcu Paz",
  "Yadira Daniela Camey Velasco",
  "Carlos Javier Azañon Umaña",
  "Gabriel Estuardo Garcia Giron"
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
