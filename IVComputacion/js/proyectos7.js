var tituloProyecto = ["TIENDA_JAVA", "COSMOS_HTML"];

var linkProyecto = [
  "https://drive.google.com/drive/folders/1skCUxTafbU6XE99OzHXEH99TaEq6H5GJ?usp=sharing",
  "https://meet.google.com/linkredirect?authuser=1&dest=https%3A%2F%2Fjanaldana.github.io%2FCosmos_HTML%2F"
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
