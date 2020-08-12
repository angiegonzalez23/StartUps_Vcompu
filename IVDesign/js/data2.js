var imgPerfil = [
  '<img class="ag_Perfil" src="img/andreaDelpilar.png">',
  '<img class="ag_Perfil" src="img/deisi.png">',
  '<img class="ag_Perfil" src="img/juanPablo.png">',
  '<img class="ag_Perfil" src="img/pricila.png">',
  '<img class="ag_Perfil" src="img/wilbert.png">',
  '<img class="ag_Perfil" src="img/diego.jpg">',
  '<img class="ag_Perfil" src="img/pabloFranco.png">'
];

var usuarios = [
  "Andrea del Pilar Sique Racanac",
  "Deisi Asuceli Ruiz Socop",
  "Juan Pablo Monroy Pineda",
  "Pricila Lizbeth Morales García",
  "Wilber Omar Franco del Cid",
  "Diego Eduardo Osorio Chunchún",
  "Pablo José Franco Vásquez"
];

var carrera = [
  "IV Computación",
  "IV Computación",
  "IV Computación",
  "IV Computación",
  "IV Computación",
  "IV Computación",
  "IV Computación"
];

var especialidad1 = [
  "HTML, CSS",
  "Se  me facilita el htlm /css.",
  "HTML/CSS",
  "Ortografía ",
  "HTML",
  "Matemáticas",
  "HTML/CSS"
];

var especialidad2 = [
  "Ortografía",
  "Se me facilitan los  temas que son de sociales.",
  "JAVA",
  "HTML y CSS",
  "CSS",
  "Páginas web",
  "JAVA"
];

var descripcion = [
  "Soy una persona responsable que se esfuerza cada día por aprender algo diferente, que que trata de hacer lo mejor siempre",
  "Soy una persona  que trata de ser muy puntual con sus obligaciones y trato de siempre ayudar a las personas que lo necesitan.",
  "Soy una persona que le gusta mucho escuchar, me gusta la cocina, me gusta la musica, me gustan los animales, me gusta leer, me considero una persona amigable, solidario, respetuoso y llevadero.",
  "Tengo 16 años y me considero una persona muy simpática, amigable y respetuosa. Me gusta ser puntual y responsable en mis estudios, soy una persona que sueña en grande y lucha por lo que quiere.",
  "Alguien serio que disfruta del silencio y no le importa nadie más que él mismo. ",
  "Persona optimista, perseverante",
  "Bueno para las matemáticas, los códigos los aprendo de forma sencilla y recibo con tolerancia y respeto las opiniones acerca de mis códigos"
];

function cargarPerfil() {
  var User = 2;

  document.getElementById("imgU").innerHTML = imgPerfil[User];
  document.getElementById("ag_Nombre").innerHTML = usuarios[User];
  document.getElementById("ag_carrera").innerHTML = carrera[User];
  document.getElementById("especialidad1").innerHTML = especialidad1[User];
  document.getElementById("especialidad2").innerHTML = especialidad2[User];
  document.getElementById("infoDescripcion").innerHTML = descripcion[User];
}

cargarPerfil();
