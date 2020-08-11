var tituloProyecto = ["EXAMENES", "DIPLOMAS"];

var linkProyecto = [
  "https://drive.google.com/drive/folders/1nXyzjkCXO0K4Vr1PtClP7CvfLii1fqtu?usp=sharing",
  "https://drive.google.com/drive/folders/1WMBLvqJPH-oNbgnUPAgo1RyKRezP14lm?usp=sharing"
];

var img = ['<img src="img/examen.jpg">', '<img src="img/diploma.jpg">'];

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
