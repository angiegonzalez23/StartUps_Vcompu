var tituloProyecto = ["MIXCO", "FOTOGRAFÍA", "BANNER", "INSTRUCTIVO"];

var linkProyecto = [
  "https://classroom.google.com/u/1/g/tg/NDE4MzU4MzA0MzRa/MTQzMDA4MDU5NzY3?authuser=1#u=MTA2NjQxOTA5NzBa",
  "https://classroom.google.com/u/1/g/tg/NDE4MzU4MzA0MzRa/MTQzMDA4MDU5NzY3?authuser=1#u=MTA2NjQxOTA5NzBa",
  "https://classroom.google.com/u/1/g/tg/NDE4MzU4MzA0MzRa/MTQzMDA4MDU5NzY3?authuser=1#u=MTA2NjQxOTA5NzBa",
  "https://drive.google.com/drive/folders/0Bz0rQaqDQQfQfnRIcGZqV0wyVFo3b0tSbGtnOTBfWHYtZWxOVzZid2pjMlUxbWxIOE1LVzg?usp=sharing"
];

var img = [
  '<img src="img/proyecto.jpg">',
  '<img src="img/proyecto2.jpg">',
  '<img src="img/proyecto3.jpg">',
  '<img src="img/proyecto4.jpg">'
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
