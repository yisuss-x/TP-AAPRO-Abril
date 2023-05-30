function abrirVentana() {
    window.open("https://www.example.com", "../html/secret.html", "height=400,width=400");
    const video = document.querySelector('video');
    async function enablePictureInPicture() {
    await video.requestPictureInPicture();
  }
  
  }
  window.onload = abrirVentana;