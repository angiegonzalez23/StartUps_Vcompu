var imgPerfil = [
    '<img class="ag_Perfil" src="imgperfilusuario/VMagisterio/violeta.jpg">'
];

var usuarios = [
    "Ana Violeta Reyes Toledo",
    "Kimberly Fabiola Vásquez Morán"
];

var carrera = [
    "Quinto Magisterio de preprimaria",
    "5to Magisterio en Educación Preprimaria"
];

var especialidad1 = [
    "Curso nivel  principiantes en lenguaje de señas",
    "Ortografía"
];

var especialidad2 = [
    "Curso segundo año orientado en la educación pre-primaria",
    "Educación "
];

var descripcion = [
    'Soy una estudiante con metas de poder seguir una carrera universitaria orientada en mi carrera escolar para poner en práctica e indagar más sobre esta profesión.',
    'Soy una persona positiva que busca cumplir todas sus metas con esfuerzo y dedicación, soy muy responsable en mi trabajo, me gusta hacer bien mi trabajo y sobresalir.'
];




function cargarPerfil() {
    var User = 0;

    var datoImgUser = document.querySelector("#imgU");
    var datoNombre = document.querySelector("#ag_Nombre");
    var datoCarrera = document.querySelector("#ag_carrera");
    var datoEspecialidad1 = document.querySelector("#especialidad1");
    var datoEspecialidad2 = document.querySelector("#especialidad2");
    var datoDescripcion = document.querySelector("#infoDescripcion");


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

cargarPerfil();