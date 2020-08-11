var imgPerfil = [
  '<img class="ag_Perfil" src="img/default.png">',
  '<img class="ag_Perfil" src="img/default.png">',
  '<img class="ag_Perfil" src="img/default.png">'
];

var usuarios = [
  "Luis Diego Solis Lutin",
  "Paula Sofía Martínez Luch-Car",
  "Jackeline Rocio Cotom Leiva"
];

var carrera = [
  "V Finanzas y Administración",
  "V Finanzas y Administración",
  "V Finanzas y Administración"
];

var especialidad1 = [
  "Educación Física",
  "Organización y Administración ",
  "Inflación"
];

var especialidad2 = [
  "Contabilidad ",
  "Legislación Tributaria  ",
  "Contabilidad"
];

var descripcion = [
  "Soy una persona que se preocupa por los demás y busca el bienestar de los demás por encima de la mía, lo más importante para mi es mi familia, soy una persona leal, fiel y directa. Quiero superarme para poder sacar a mi familia adelante y ser un buen ejemplo para los que me rodean.",
  "Soy una persona de carácter fuerte en algunas ocasiones y  con ganas de superación. ",
  "Soy una persona con una gran motivación, soy capaz de adaptarme a cualquier circunstancia y dar siempre lo mejor de mí en cualquier proyecto."
];

function cargarPerfil() {
  var User = 0;

  document.getElementById("imgU").innerHTML = imgPerfil[User];
  document.getElementById("ag_Nombre").innerHTML = usuarios[User];
  document.getElementById("ag_carrera").innerHTML = carrera[User];
  document.getElementById("especialidad1").innerHTML = especialidad1[User];
  document.getElementById("especialidad2").innerHTML = especialidad2[User];
  document.getElementById("infoDescripcion").innerHTML = descripcion[User];
}

cargarPerfil();
