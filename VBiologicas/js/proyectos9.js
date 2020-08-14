var tituloProyecto = ["MY COMPUTADORA"];

var linkProyecto = [
  "https://www.canva.com/design/DAEDjga2tDc/Wd7cBPsXh429zmb3UvuE7A/view?utm_content=DAEDjga2tDc&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menug"
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
