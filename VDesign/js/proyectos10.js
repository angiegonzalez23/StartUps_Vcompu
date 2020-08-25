var tituloProyecto = ["MIXCO", "FOTOGRAFÍA", "BANNER", "INSTRUCTIVO"];

var linkProyecto = [
  "https://drive.google.com/drive/folders/1zHrcJoTvpo72DO6O_ZtbeQHQawiqUJmM?usp=sharing",
  "https://drive.google.com/drive/folders/1uFviVxd_akU8F2_5zDAjhtzhNNPsEVvQ?usp=sharing",
  "https://drive.google.com/drive/folders/1in1xjOfYVJE8o_jJWrS8KF_k5GCH7qnZ?usp=sharing",
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
