var tituloProyecto = ["DISEÑO UI", "COSMOS_HTML"];

var linkProyecto = [
  "https://drive.google.com/file/d/1GxKWi6wZyT0KJFwg5hnb0ky9wqO7Waz4/view?usp=sharing/",
  "https://fercholuch.github.io/III-12-C-digo-2/"
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
