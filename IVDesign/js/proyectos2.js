var tituloProyecto = ["DISEÑO UI", "COSMOS_HTML"];

var linkProyecto = [
  "https://drive.google.com/file/d/12tFHqqB1pJBFDiXCrtIfztBQSrWzHVE1/view?usp=sharing",
  "https://jpmejia2.github.io/Practica1/"
];

var img = ['<img src="img/ui.jpg">', '<img src="img/codeHTML1.png">'];

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
