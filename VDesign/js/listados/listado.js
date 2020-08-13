var usuarios = [
  "Alison Betsabeh Lutín Martínez Entregadas",
  "Ana Cecilia Alburez Castillo",
  "Andrea Sofía Estrada Toron",
  "Andres Eduardo Serra Paredes",
  "Angelly Stacy Monroy Arévalo",
  "Cari Paulette Permuth Portillo",
  "Dejanira Angela Ivonne Borrayo Reyes",
  "Dulcemaria Fuentes Moran",
  "Freeny Geraldyne Car Corzo",
  "Jose Daniel Gonzalez Ovalle",
  "Josseline Pamela Cifuentes Solares",
  "Karol Anahely Jazmyn Orellana Luis",
  "Keren Rebecah Anleu Ambrosio",
  "Luis Pedro Yantuche Pocon",
  "Michelle Alejandra Valencia Chivichón",
  "Nayare Darian Gonzalez Lorenzo",
  "Rocio Michelle Girón De Paz",
  "Sergio Anibal Calicio Pérez",
  "Skarlett Ivonne Moreira Gutierrez",
  "Vivian Fernanda Contreras Bran",
  "Yeimi Alejandra Sabán"
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
