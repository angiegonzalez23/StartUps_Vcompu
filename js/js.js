var nombreProyecto = [
    "Login"
];

var imgCarrera = [
    "imgperfilusuario/Vcomputacion/imgProyectos/proyectoLogin.jpg"
];


function cargarRecientes() {

    var cajaRecientes = document.querySelector("#cr");

    nombreProyecto.forEach(function(elemento, indice) {

        var tarjeta = document.createElement("div");

        tarjeta.innerHTML =

            '<a href="#">' +
            ' <div class="cv_CuadrosImgs">' +
            '<div class="cv_CuadroInterior">' +
            '<p>' +
            nombreProyecto[indice] +
            '</p>' +
            '</div>' +
            '</div>' +
            '</a>'

        cajaRecientes.appendChild(tarjeta);

    });

};

cargarRecientes();