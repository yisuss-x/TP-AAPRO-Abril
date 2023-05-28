/* > o < de edad */ 
let button = document.querySelector(".button-index")

button.addEventListener("click", () => {
    button = prompt("Ingrese su edad");

    if (button >= "18"){
        window.location="../html/Inicio.html"
    } else {
        alert("Por favor no comparta esta informacion, entrará bajo su propio riesgo");
        window.location="../html/Inicio.html"
    }
});
/* variables redes */
let facebook = document.querySelector(".fa-facebook")
let instagram = document.querySelector(".fa-instagram")
let whatsapp = document.querySelector(".fa-whatsapp")
let twitter = document.querySelector(".fa-twitter")

/* seguro de salir */
facebook.addEventListener("click", () => {
    facebook = confirm("Estas por salir de la pagina. Estas ¿seguro?");

    if (facebook == true){
        location.href = "https://www.facebook.com/";
    } else {
        alert("Por favor decida si ir o quedarse");
    }
});
instagram.addEventListener("click", () => {
    instagram = confirm("Estas por salir de la pagina. Estas ¿seguro?");

    if (instagram == true){
        location.href = "https://www.instagram.com/";
    } else {
        alert("Por favor decida si ir o quedarse");
    }
});
whatsapp.addEventListener("click", () => {
    whatsapp = confirm("Estas por salir de la pagina. Estas ¿seguro?");

    if (whatsapp == true){
        location.href = "http://wa.me/5493364613569?text=Necesito%20información";
    } else {
        alert("Por favor decida si ir o quedarse");
    }
});
twitter.addEventListener("click", () => {
    twitter = confirm("Estas por salir de la pagina. Estas ¿seguro?");

    if (twitter == true){
        location.href = "https://twitter.com/?lang=es";
    } else {
        alert("Por favor decida si ir o quedarse");
    }
});


//----------------------------//
/* ENTRETENIMIENTO */

/* console.profile()
var cartas = new Array( 
  {nombre: 'Anjelita', seleccion: false}, {nombre: 'Rodrigo', seleccion: false}, 
  {nombre: 'Clara Ines', seleccion: false}, {nombre: 'Eugenia', seleccion: false}, 
  {nombre: 'Maria Victoria', seleccion: false}, {nombre: 'Antonio', seleccion: false}, 
  {nombre: 'Carlos Eduardo', seleccion: false}, {nombre: 'Carmen Elena', seleccion: false}, 
  {nombre: 'Anjelita', seleccion: false}, {nombre: 'Rodrigo', seleccion: false}, 
  {nombre: 'Clara Ines', seleccion: false}, {nombre: 'Eugenia', seleccion: false}, 
  {nombre: 'Maria Victoria', seleccion: false}, {nombre: 'Antonio', seleccion: false}, 
  {nombre: 'Carlos Eduardo', seleccion: false}, {nombre: 'Carmen Elena', seleccion: false} );
        
var intentos = 0;
var jugada1 = " ";
var jugada2 = " ";
var identificadorJ1 = " ";
var identificadorJ2 = " ";

function iniciarJuego () {  
  var dato = document.getElementById("juego");
  dato.style.opacity = 1;

  cartas.sort(function() {return Math.random() - 0.5});
  for ( var i = 0 ; i < 16 ; i++ ) {
    var carta = cartas[i].nombre;
    var dato = document.getElementById( i.toString() );
    dato.dataset.valor = carta;
  }
};

function resetearJuego () {
  cartas.sort(function() {return Math.random() - 0.5});
  for ( var i = 0 ; i < 16 ; i++ ) {
    var carta = cartas[i].nombre;
    var dato = document.getElementById( i.toString() );
    dato.dataset.valor = carta;
    colorCambio( i, 'black', '?');
  } 
}

function girarCarta () {
  var evento = window.event;

  jugada2 = evento.target.dataset.valor;
  identificadorJ2 = evento.target.id;


  if ( jugada1 !== " " ) {

    if ( jugada1 === jugada2 && identificadorJ1 !== identificadorJ2 && cartas[parseInt(identificadorJ2)].seleccion != true &&               cartas[parseInt(identificadorJ1)].seleccion != true) {
      
      cartas[parseInt(identificadorJ1)].seleccion = true;
      cartas[parseInt(identificadorJ2)].seleccion = true;

      colorCambio(identificadorJ2, "blue", jugada2);
      vaciar();
      comprobar();
    }else if(identificadorJ1 !== identificadorJ2){
      var self = this;
      setTimeout(function(){
        colorCambio(self.identificadorJ1, "black", "?")
        colorCambio(self.identificadorJ2, "black", "?")
        vaciar()
      },200); 

      colorCambio(identificadorJ2, "blue", jugada2);
    }
  } else if(jugada2 !== "valor") {

    colorCambio(identificadorJ2, "blue", jugada2);

    jugada1 = jugada2;
    identificadorJ1 = identificadorJ2;
  }
};

function vaciar ()  {
  jugada1 = " "; 
  jugada2 = " "; 

  identificadorJ1 = " ";
  identificadorJ2 = " ";
}

function colorCambio (posicion, color, contenido) {
  document.getElementById(posicion.toString()).style.backgroundColor = color;
  document.getElementById(posicion.toString()).innerHTML = contenido;
}   

function comprobar () {
  var aciertos = 0;
  for( var i = 0 ; i < 16 ; i++ ){
    if ( cartas[i].seleccion == true ) {
      aciertos ++;
    }

  }

  if(aciertos == 16){
   document.getElementById("juego").innerHTML = "Felicidades Ganaste!!!";
     
  }
}

function resetearJuego () {
            cartas.sort(function() { return Math.random() - 0.5});
            for ( var i = 0; i < 16 ; i++ ) {
                var carta = cartas[i].nombre;
                var dato = document.getElementById( i.toString() );
                dato.dataset.valor = carta;
                colorCambio(i, 'black', '?');
              console.profileEnd()
            }
        };

 */
//-------------------------------------------
 /* ENTRETENIMIENTO */

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", this.window.scrollY > 0);
});


//-------------------------------------------

// Inicialización de variables

let tarjeta1 = null;
let tarjeta2 = null;
let resultado1 = null;
let resultado2 = null;
let tiempoRegresivo = null;
let temporizador = false;
let descubrirTarjetas = 0;
let movimientos = 0;
let aciertos = 0;
let tiempo = 30;
let tiempoInicial = 30;

// Apuntando a documento HTML
let mostrarMovimientos = document.getElementById("movimientos");
let mostrarAciertos = document.getElementById("aciertos");
let mostrarTiempo = document.getElementById("t-restante");

// Generación de números aleatorios
let num = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
num = num.sort(() => { return Math.random() - 0.5 });
console.log(num);
// Funciones
function contarTiempo() {
    tiempoRegresivo = setInterval(() => {
        tiempo--;
        mostrarTiempo.innerHTML = `Tiempo ${tiempo} segundos`;
        if (tiempo === 0) {
            clearInterval(tiempoRegresivo);
            bloquearTarjetas();
        }
    }, 1000);
}
function bloquearTarjetas() {
    for (let i = 0; i <= 15; i++) {
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = num[i];
        tarjetaBloqueada.disabled = true;
    }
}
// Función principal del click
function descubrir(id) {
    if (temporizador === false) {
        contarTiempo();
        temporizador = true;
    }

    descubrirTarjetas++;
    console.log(descubrirTarjetas);

    if (descubrirTarjetas === 1) {
        //muestra el primer numero
        tarjeta1 = document.getElementById(id);
        resultado1 = num[id];
        tarjeta1.innerHTML = resultado1;

        //Deshabilitar primer boton
        tarjeta1.disabled = true;
    } else if (descubrirTarjetas === 2) {
        //mostrar segundo numero
        tarjeta2 = document.getElementById(id);
        resultado2 = num[id];
        tarjeta2.innerHTML = resultado2;

        // Deshabilitar segundo boton
        tarjeta2.disabled = true;

        // Incrementar movimientos
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if (resultado1 === resultado2) {
            //Poner en cero el contador tarjetas descubiertas
            descubrirTarjetas = 0;

            // Aumentar aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if (aciertos === 8) {
                clearInterval(tiempoRegresivo);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 😱`;
                mostrarTiempo.innerHTML = `Fantástico! 🥳🎉 Sólo demoraste ${tiempoInicial - tiempo} segundos `
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} ✌😎 `
            }
        } else {
            //Mostrar momentaneamente valores y volver a tapar
            setTimeout(() => {
                tarjeta1.innerHTML = " ";
                tarjeta2.innerHTML = " ";
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                descubrirTarjetas = 0;
            }, 800);
        }
    }
}