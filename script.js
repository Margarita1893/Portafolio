// Elementos que se obtienen
var modes = document.querySelector("#modes_menu");
var mode_btn = document.querySelector("#modes-btn");

// Evento 
mode_btn.onclick = () => {
    modes.classList.toggle("modes_menu--ocultar");
};



// const typed = new Typed('.typed', {
//     Strings: [  '<i class="text">Desarrolladora</i>',
//                 '<i class="text">fullstack</i>',
//                 '<i class="text">fullstack</i>'
//     ],
//     stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
//     typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
//     startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
//     backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
//     smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
//     shuffle: false, // Alterar el orden en el que escribe las palabras.
//     backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
//     loop: true, // Repetir el array de strings
//     loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
//     showCursor: true, // Mostrar cursor palpitanto
//     cursorChar: '|', // Caracter para el cursor
//     contentType: 'html', // 'html' o 'null' para texto sin formato
// });


const typed = new Typed('.typed', {
    strings: [
        '<i class="text">FullStack Junior</i>',
        '<i class="text">Tecnologa en</i>',
        '<i class="text">Analisis & Desarrollo</i>'

    ],

    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
    startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
    smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '|', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
});