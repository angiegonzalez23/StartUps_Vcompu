var tituloProyecto = ["DISEÑO UI", "COSMOS_HTML"];

var linkProyecto = [
  "https://drive.google.com/file/d/1wKeq-usg17HI7qO4f4vhiM1T_qXFtigC/view?usp=sharing",
  "https://kagjuarez.github.io/1.Codigo/"
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
