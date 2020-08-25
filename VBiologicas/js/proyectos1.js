var tituloProyecto = ["MY COMPUTADORA"];

var linkProyecto = [
  "https://www.canva.com/design/DAEDnVUHC7s/4eeCglNsu9l4PHTDO4LweA/view?utm_content=DAEDnVUHC7s&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
];

var img = ['<img src="img/proyecto1.png">'];

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
