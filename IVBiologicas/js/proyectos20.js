var tituloProyecto = ["MI COMPUTADORA"];

var linkProyecto = [
  "https://drive.google.com/drive/folders/0Bz0rQaqDQQfQfkt4RzJCeWZDY3VVQTV4dWpQMk1Mc0xDTkV6WkpxWTBQUEZiMUs1RlFKUXM?usp=sharing"
];

var img = ['<img src="img/proyecto.jpg">'];

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
