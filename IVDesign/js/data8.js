var imgPerfil = [
  '<img class="ag_Perfil" src="img/default.png">',
  '<img class="ag_Perfil" src="img/fernandoJavier.png">',
  '<img class="ag_Perfil" src="img/josePablo.png">',
  '<img class="ag_Perfil" src="img/default.png">',
  '<img class="ag_Perfil" src="img/default.png">',
  '<img class="ag_Perfil" src="img/katherine.jpg">',
  '<img class="ag_Perfil" src="img/default.png">',
  '<img class="ag_Perfil" src="img/susanAndrea.png">',
  '<img class="ag_Perfil" src="img/default.png">'
];

var usuarios = [
  "Diego Alexander Barrios Hernández",
  "Fernando Javier Luch Contreras",
  "José Pablo Mejia Galiano",
  "Joselyn Gabriela Andrea Xajil Cuy",
  "Katherine Michelle Alvarado Garcia",
  "Keiry Anaí Guadalupe Juárez Erazo",
  "Natalie Noemí Zamora Santizo",
  "Susan Andrea Ramos Aguilar",
  "Rafael Andree de León Ramirez"
];

var carrera = [
  "IV Diseño",
  "IV Diseño",
  "IV Diseño",
  "IV Diseño",
  "IV Diseño",
  "IV Diseño",
  "IV Diseño",
  "IV Diseño",
  "IV Diseño"
];

var especialidad1 = [
  "Adobe XD",
  "Photoshop",
  "Manejo muy bien el programa Adobe XD para hacer diseños",
  "Lenguaje de señas básico",
  "Primer año en el diseño de paginas web",
  "Photoshop",
  "Photoshop",
  "Buen manejo de las herramientas de Photoshop",
  "Photoshop"
];

var especialidad2 = [
  "Photoshop",
  "Adobe Xd",
  "Puedo editar fotos con Picsart",
  "Manejo básico de programas como photoshop, adobe xd y adobe illustrator. Desarrolladora  de páginas web en html y css 5.",
  "Fotografía",
  "Adobe xd",
  "Programación",
  "html y css",
  "adobe xd"
];

var descripcion = [
  "Soy una persona creativa que le encanta diseñar :)",
  "Amigable, algo sociable, alguien de mucha confianza, detallista, gentil, algo serio...",
  "Soy un chico muy calmado y una combinación extraña entre serio y divertido. No me gusta tanto hablar y por eso me considero prudente al hacerlo ya que me da tiempo de pensar antes de decir las cosas. Amo los ambientes calmados y solitarios, por lo tanto, no me gusta socializar.",
  "Me gusta reinventarme, cada uno de mis trabajos y proyectos tienen una intención tanto en el proceso como en los resultados. ",
  "Soy muy paciente, creativa, algo seria y callada, me gusta trabajar en silencio y se trabajar bajo presión",
  "Mi persona es alguien reservada, callada, observadora, seria, pero a la hora de conocerme suelo ser más amable y menos fría, el hecho de ser así es porque me concentro en los pequeños detalles que están a mi alrededor y los plasmo en ideas o dibujos.",
  "Soy una persona muy abierta de mente, siempre dispuesta a nuevas ideas y oportunidades; suelo ser persistente y optimista en los proyectos que yo genero, o en los que participo (aunque se me sea dificil trabajar en grupo aveces). Paciente y flexible al ayudar a otros. Responsable aunque no muy organizada. Me agrada tener mi espacio pero si tengo que compartir no genero líos. Empática pero firme ante diferentes situaciones. Busco encontrar soluciones de la forma rápida, y creativamente, pero manteniendo los parámetros necesarios (formalidad, llamativo, ameno etc). Intento mostrar siempre la inniciativa; y cuando no es posible, apoyo y demuestro todo mi potencial hacia el grupo y el lider. Competitiva, manteniendo el respeto y aceptación de errores.",
  "Me considero una persona muy sociable, amigable, y extrovertida,  siempre trato de buscar otros puntos de vista de las cosas o de las personas, siempre he tomado mis fracasos como impulsos para poder conseguir lo que quiero. ",
  "Una persona tranquila, con grandes sueños y metas"
];

function cargarPerfil() {
  var User = 8;

  document.getElementById("imgU").innerHTML = imgPerfil[User];
  document.getElementById("ag_Nombre").innerHTML = usuarios[User];
  document.getElementById("ag_carrera").innerHTML = carrera[User];
  document.getElementById("especialidad1").innerHTML = especialidad1[User];
  document.getElementById("especialidad2").innerHTML = especialidad2[User];
  document.getElementById("infoDescripcion").innerHTML = descripcion[User];
}

cargarPerfil();
