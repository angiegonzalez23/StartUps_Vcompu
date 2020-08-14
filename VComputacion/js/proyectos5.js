var tituloProyecto = ["PORTAFOLIO", "GAME 1", "STARTUP"];

var linkProyecto = [
  "https://nergal-luis.github.io/Portafolio_web-/index.html",
  "https://nergal-luis.github.io/Tarjetas-/",
  "https://angiegonzalez23.github.io/StartUps_Vcompu/"
];

var img = [
  '<img src="img/portafolio.jpg">',
  '<img src="img/tarjetaGame.jpg">',
  '<img src="img/startup.jpg">'
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
