var carrera = [
    "V magisterio",
    "V Computación",
    "V Diseño",
    "IV Computación",
    "IV Diseño"
];

function cargarRecientes() {

    var cajaRecientes = document.querySelector("#cr");

    carrera.forEach(function(elemento, indice) {

        var tarjeta = document.createElement("div");

        tarjeta.innerHTML =

            '<a href="#">' +
            ' <div class="cv_CuadrosImgs">' +
            '<div class="cv_CuadroInterior">' +
            '<p>' +
            carrera[indice] +
            '</p>' +
            '</div>' +
            '</div>' +
            '</a>'

        cajaRecientes.appendChild(tarjeta);

    });

};

cargarRecientes();