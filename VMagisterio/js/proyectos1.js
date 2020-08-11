var tituloProyecto = ["EXAMENES", "DIPLOMAS"];

var linkProyecto = [
  "https://drive.google.com/drive/folders/1kpVr5UKsdRTIXkfxAXL22j_c3yZ7A3On?usp=sharing",
  "https://drive.google.com/drive/folders/1Sy9WWZUQ_K3pBOgb5Q-gc5Ub3JcTSgf6?usp=sharing"
];

var img = ['<img src="img/examen.jpg">', '<img src="img/diploma.jpg">'];

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
