var usuarios = [
  "Andrea del Pilar Sique Racanac",
  "Deisi Asuceli Ruiz Socop",
  "Juan Pablo Monroy Pineda",
  "Pricila Lizbeth Morales García",
  "Wilber Omar Franco del Cid",
  "Diego Eduardo Osorio Chunchún",
  "Pablo José Franco Vásquez"
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
