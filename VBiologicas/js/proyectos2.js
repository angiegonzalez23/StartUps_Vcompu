var tituloProyecto = ["MY COMPUTADORA"];

var linkProyecto = [
  "https://www.canva.com/design/DAEDnZ08zFM/nl2VWq3ZNq3h4LKKLVBdmg/view?utm_content=DAEDnZ08zFM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
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
