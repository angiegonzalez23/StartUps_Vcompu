var tituloProyecto = ["TIENDA_JAVA", "COSMOS_HTML"];

var linkProyecto = [
  "https://github.com/pricilagarcia/Tienda_Fashion.git",
  "https://pricilagarcia.github.io/Sistema_Solar/"
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
