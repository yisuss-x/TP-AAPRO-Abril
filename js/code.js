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