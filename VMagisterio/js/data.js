var imgPerfil = [
    '<img class="ag_Perfil" src="img/violeta.jpg">',
    '<img class="ag_Perfil" src="imgkinverly.png">',
    '<img class="ag_Perfil" src="img/Aileen.jpg">'
];

var usuarios = [
    "Ana Violeta Reyes Toledo",
    "Kimberly Fabiola Vásquez Morán",
    'Aileen de los Angeles Del Cid Alvarez',
];

var carrera = [
    "V Magisterio en Educación Preprimaria",
    "V Magisterio en Educación Preprimaria",
    "V Magisterio en Educación Preprimaria",
];

var especialidad1 = [
    "Curso nivel  principiantes en lenguaje de señas",
    "Ortografía",
    "La repostería."
];

var especialidad2 = [
    "Curso segundo año orientado en la educación pre-primaria",
    "Educación ",
    "Manualidades."
];

var descripcion = [
    'Soy una estudiante con metas de poder seguir una carrera universitaria orientada en mi carrera escolar para poner en práctica e indagar más sobre esta profesión.',
    'Soy una persona positiva que busca cumplir todas sus metas con esfuerzo y dedicación, soy muy responsable en mi trabajo, me gusta hacer bien mi trabajo y sobresalir.',
    "Me considero una persona muy tímida y callada pero con un carácter fuerte, normalmente siempre apoyo a mis amigos y trato de animarlo ya que eso me hace sentir mejor e intento ser amable con todos aunque se me dificulta al socializar con las personas nuevas."
];



function cargarPerfil() {

    var User = 0;

    var datoImgUser = document.getElementById("imgU");
    document.getElementById("ag_Nombre").innerHTML = "hola";
    console.log(datoNombre);
    var datoCarrera = document.getElementById("ag_carrera");
    var datoEspecialidad1 = document.getElementById("especialidad1");
    var datoEspecialidad2 = document.getElementById("especialidad2");
    var datoDescripcion = document.getElementById("infoDescripcion");

    datoImgUser.innerHTML = "";
    datoImgUser.innerHTML = imgPerfil[User];


    datoNombre.innerHTML = "";
    datoNombre.innerHTML = usuarios[User];

    datoCarrera.innerHTML = "";
    datoCarrera.innerHTML = carrera[User];

    datoEspecialidad1.innerHTML = "";
    datoEspecialidad1.innerHTML = especialidad1[User];

    datoEspecialidad2.innerHTML = "";
    datoEspecialidad2.innerHTML = especialidad2[User];

    datoDescripcion.innerHTML = "";
    datoDescripcion.innerHTML = descripcion[User];

};

cargarPerfil()