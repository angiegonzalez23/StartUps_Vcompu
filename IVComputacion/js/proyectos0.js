var tituloProyecto = ["TIENDA_JAVA", "COSMOS_HTML"];

var linkProyecto = [
  "https://github.com/AndreaSique/Verduleria_Los_3_Hermanos.git",
  "https://andreasique.github.io/Pagina_De_Ejercicios/"
];

var img = ['<img src="img/javaTienda.jpg">', '<img src="img/html1.jpg">'];

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
