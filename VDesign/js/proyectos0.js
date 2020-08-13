var tituloProyecto = ["MIXCO", "FOTOGRAFÍA", "BANNER"];

var linkProyecto = [
  "https://drive.google.com/drive/folders/1ycW_o1B0c_bPo0HvNOzIH_iePzvb6iXQ?usp=sharing",
  "https://drive.google.com/drive/folders/1TopO97bPw5OCrlVkm5krRy_u3uECBoK0?usp=sharing",
  "https://drive.google.com/drive/folders/1ZJmtGPlG8O42MGGeub6EUIA31hdXb3iB?usp=sharing"
];

var img = [
  '<img src="img/proyecto.jpg">',
  '<img src="img/proyecto2.jpg">',
  '<img src="img/proyecto3.jpg">'
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
