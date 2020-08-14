var imgPerfil = [
  '<img class="ag_Perfil" src="img/angelJosue.jpg">',
  '<img class="ag_Perfil" src="img/angieMagali.png">',
  '<img class="ag_Perfil" src="img/carlosFernando.jpg">',
  '<img class="ag_Perfil" src="img/davidRolando.png">',
  '<img class="ag_Perfil" src="img/diegoAlejandro.png">',
  '<img class="ag_Perfil" src="img/javierAndres.png">',
  '<img class="ag_Perfil" src="img/jorgeLuis.png">',
  '<img class="ag_Perfil" src="img/kellyMishell.png">',
  '<img class="ag_Perfil" src="img/marcoAndres.png">',
  '<img class="ag_Perfil" src="img/piliGery.png">',
  '<img class="ag_Perfil" src="img/robertoCarlos.png">',
  '<img class="ag_Perfil" src="img/stephanyMarisol.png">',
  '<img class="ag_Perfil" src="img/yadiraDaniela.png">',
  '<img class="ag_Perfil" src="img/carlosJavier.png">',
  '<img class="ag_Perfil" src="img/gabrielEstuardo.PNG">'
];

var usuarios = [
  "Angel Josue Yupe Cardona",
  "Angie Magalí González Aguilar",
  "Carlos Fernando Villatoro López",
  "David Rolando Juárez Ureña",
  "Diego Alejandro Jimenez Gonzalez",
  "Javier Andres Macario Juárez",
  "Jorge Luis López Rosales",
  "Kelly Mishell Alay Sarceño",
  "Marco Andree Mazariegos Pérez",
  "Pili Gery Charlize Escobar Torres",
  "Roberto Carlos Carrillo Yapán",
  "Stephany Marisol Jamileth Ajcu Paz",
  "Yadira Daniela Camey Velasco",
  "Carlos Javier Azañon Umaña",
  "Gabriel Estuardo Garcia Giron"
];

var carrera = [
  "V Computación",
  "V Computación",
  "V Computación",
  "V Computación",
  "V Computación",
  "V Computación",
  "V Computación",
  "V Computación",
  "V Computación",
  "V Computación",
  "V Computación",
  "V Computación",
  "V Computación",
  "V Computación",
  "V Computación"
];

var especialidad1 = [
  "Inglés",
  "CSS",
  "Computación",
  "Matemáticas",
  "Paginas Html",
  "HTML-CSS",
  "...",
  "Maquetación de páginas web ",
  "JAVA",
  "HTML-CSS",
  "Analizando, situaciones o problemas",
  "Biología",
  "Creación y maquetación de Páginas Web y manejo de aplicaciones como Brackets, Atom, Java, Adobe XD y Photoshop.",
  "HTML5",
  "..."
];

var especialidad2 = [
  "HTML-CSS",
  "HTML",
  "Inglés",
  "HTML - CSS",
  "Codigos Css",
  "JAVA",
  "...",
  "...",
  "HTML - CSS",
  "Matemática",
  "Sociales",
  "HTML-CSS",
  "...",
  "CSS",
  "Un poco de programación"
];

var descripcion = [
  "Tengo 18 años, actualmente estudio programación y me gusta programar páginas web con html y css, también me gusta estudiar inglés.",
  "Soy una persona muy introvertida y reservada, me gusta mucho realizar las cosas de la mejor manera posible.",
  "Soy un estudiante de ultimo año en el SCL, un poco introvertido, apasionado, para nada creativo y que disfruta su tiempo libre.",
  "MI nombre es David Juárez, actualmente estoy en la carrera de Computación en el segundo año de esta carrera para ser más específico, pienso ir a la Universidad y estudiar la Carrera de Ingeniería en Sistemas y en un futuro a largo plazo me gustaría poder ser un Ingeniero y poder cumplir todos mis logros y metas.",
  "Soy Serio, No Me Llevo Con Cualquier Persona, Me Gusta Luchar Por Mis Sueños Hasta Que Se Cumplan, Soy Sensible Pero Solo Con Algunas Cosas",
  "Soy estudiante del colegio SCL, me gusta realizar páginas web, jugar fútbol y escuchar música.",
  "...",
  "Tengo 17 años ",
  "Una persona bastante alegre, amigable, solidario, respetuoso, entusiasta con ganas de poder emprender en el mundo de la programación y desarrollo de software.",
  "Como persona organizada y con una gran motivación, soy capaz de adaptarme a cualquier circunstancia y dar siempre lo mejor de mí en cualquier proyecto, al mismo tiempo que me esfuerzo por trabajar en equipo y fomentar valores como los del compañerismo.",
  "Soy una persona seria, me gusta ayudar a mis amigos cuando lo necesitan, intento vivir mi día a día un paso a la vez, mi meta es llegar a ser un buen abogado y ayudar a las personas que necesiten mi ayuda.",
  "Tengo 17 años, soy aplicada, me gusta ser creativa con lo que hago",
  "Tengo 18 años, me gusta apasionarme en los trabajos que he realizado y soy muy ordenada,  me gusta aprender y dar lo mejor de mí cada día",
  "Soy una persona calmada, seria, curiosa, que tiene ideales para seguir adelante y formarse como profesional.",
  "Soy una persona que puede hacer un poco de programación y tengo mucha experiencia en los juegos."
];
function cargarPerfil() {
  var User = 12;

  document.getElementById("imgU").innerHTML = imgPerfil[User];
  document.getElementById("ag_Nombre").innerHTML = usuarios[User];
  document.getElementById("ag_carrera").innerHTML = carrera[User];
  document.getElementById("especialidad1").innerHTML = especialidad1[User];
  document.getElementById("especialidad2").innerHTML = especialidad2[User];
  document.getElementById("infoDescripcion").innerHTML = descripcion[User];
}

cargarPerfil();
