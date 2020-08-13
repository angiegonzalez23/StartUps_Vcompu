var tituloProyecto = ["DISEÑO UI", "COSMOS_HTML"];

var linkProyecto = [
  "https://drive.google.com/drive/folders/1skCUxTafbU6XE99OzHXEH99TaEq6H5GJ?usp=sharing",
  "https://drive.google.com/drive/folders/1pwn5MT7_VNxUf-W_A3gsKADvWLXuADYg?usp=sharing"
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
