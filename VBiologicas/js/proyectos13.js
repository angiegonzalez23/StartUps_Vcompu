var tituloProyecto = ["MY COMPUTADORA"];

var linkProyecto = [
  "https://drive.google.com/drive/folders/0Bz0rQaqDQQfQfmcwajVVUXpIRDY5NlBwVGVIbFZSS0xYVnNiWlh5ZGVXWVIwRU1uQkVnazg?usp=sharing"
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
