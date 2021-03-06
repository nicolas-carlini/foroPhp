"use strict";
window.onload = function () {

  (()=>{
    const url = "https://backforo.carlini.tech/api/isLogged.php";
    axios 
    .post(url)
    .then((Response) => {
      if (Response.data.error) {
        console.log("error", Response.data);
      } else {
        if (Response.data.isLogged) {
          location.href="/home.html";
          console.log("todo bien", Response.data);
        } else {
          console.log("error, no se logueó pero no tiro error", Response.data);
        }
      }
    })
    .catch((e) => {
      console.error("Error no se detecta respuesta del servidor", e);
    });
  })();
  

  const pwd = document.getElementById("pwd");
  const email = document.getElementById("email");
  const enviar = document.getElementById("enviar");



  enviar.onclick = () => {
    const url = "https://backforo.carlini.tech/api/signin.php";
    if (email.value!==''&&pwd.value!=='') {
      newAviso("Enviando datos...");

      var formdata = new FormData();
      formdata.append("pwd", pwd.value);
      formdata.append("email", email.value);

    var requestOptions = {
      headers: {
        "Content-Type": "multipart/form-data"
      },
    };
    console.log(formdata);
    console.log(requestOptions);

    
      axios
        .post(url, formdata, requestOptions)
        .then((Response) => {
          if (Response.data.error) {
            newAviso('Algo ha fallado, controle los datos e inténtelo de nuevo');
            console.log("error", Response.data);
          } else {
            if (Response.data.isLogged) {
              newAviso('Se ha loggeado exitosamente!');
              console.log("todo bien", Response.data);
            } else {
              newAviso('Hubo un problema al logearse, inténtelo de nuevo');
              console.log("error, no se logueó pero no tiro error", Response.data);
            }
          }
        })
        .catch((e) => {
          console.error("Error no se detecta respuesta del servidor", e);
          newAviso("Error no se detecta respuesta del servidor");
        });
    }
    else{
      newAviso('Hay campos que no estan cargados, por favor rellenálos');
    }
  };
};