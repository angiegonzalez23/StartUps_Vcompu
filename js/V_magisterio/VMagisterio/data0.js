var imgPerfil = [
    '<img class="ag_Perfil" src="imgperfilusuario/VMagisterio/violeta.jpg">',
    '<img class="ag_Perfil" src="imgperfilusuario/VMagisterio/kinverly.png">',
    '<img class="ag_Perfil" src="imgperfilusuario/VMagisterio/Aileen.jpg">'
];

var usuarios = [
    "Ana Violeta Reyes Toledo",
    "Kimberly Fabiola Vásquez Morán",
    'Aileen de los Angeles Del Cid Alvarez',
    'Marianne Sophia de Leon Urrea'
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

    const quitarMesaje = document.getElementById("remover1");
    quitarMesaje.classList.add('desActivado');
    const mostrarUsuario = document.getElementById("motrar");
    mostrarUsuario.classList.remove('activado');




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

var User;


document.querySelectorAll("#user0").forEach(function(element) {
    element.addEventListener("click", user0);
});

document.querySelectorAll("#user1").forEach(function(element) {
    element.addEventListener("click", user1);
});

function user0() {
    User = 0;

    function colocarData() {
        var seccionScript = document.querySelector("#seccionScripts");
        seccionScript.innerHTML = "";
        var areaData = document.createElement("div");
        areaData.innerHTML = '<script src="js/V_magisterio/u0.js"></script>'
        seccionScript.appendChild(areaData)
    }
    colocarData();

    /*     colocarData(); */
    cargarPerfil();
}
user0();

function user1() {
    User = 1;
    cargarPerfil();

    function colocarData() {
        var cajaProyectos = document.querySelector("#scripts");
        cajaProyectos.innerHTML = "";
        var areaData = document.createElement("div");
        areaData.innerHTML =
            '<script src="js/V_magisterio/u' +
            User + '.js"></script>'
        cajaProyectos.appendChild(areaData);
    }
    colocarData();
}