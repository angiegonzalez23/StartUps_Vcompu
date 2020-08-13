var tituloProyecto = ["MIXCO", "FOTOGRAFÍA", "BANNER"];

var linkProyecto = [
  "https://drive.google.com/drive/folders/1mtRoktGT5qBINWOO9iXllD_YKpcwNAO-?usp=sharing",
  "https://drive.google.com/drive/folders/1OB0ZEdZrHkuh5tcibthEKWOiaFsorRMo?usp=sharing",
  "https://drive.google.com/drive/folders/1KLirBW79bplZkudGQ8HaALmdL2spIo3a?usp=sharing"
];

var img = [
  '<img src="img/proyecto.jpg">',
  '<img src="img/proyecto2.jpg">',
  '<img src="img/proyecto3.jpg">'
];

function mostrarProyectos() {
  var cajaProyectos = document.querySelector("#rm_cajaContenidoUsuario");

  cajaProyectos.innerHTML = "";

  tituloProyecto.forEach(function(elemento, indice) {
    var tarjeta = document.createElement("div");

    tarjeta.innerHTML =
      '<a href="' +
      linkProyecto[indice] +
      '" target="_blank">' +
      '<div class="ra_cajas">' +
      '<div class="cajaImgProyecto">' +
      img[indice] +
      "</div>" +
      '<p id="tituloProyec">' +
      tituloProyecto[indice] +
      "</p>" +
      "</div>" +
      "</a>";

    cajaProyectos.appendChild(tarjeta);
  });
}

mostrarProyectos();
