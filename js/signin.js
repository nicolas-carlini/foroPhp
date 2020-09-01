"use strict";
window.onload = function () {
  const url = "https://backforo.carlini.tech/api/signin.php";

  const pwd = document.getElementById("pwd");
  const email = document.getElementById("email");
  const enviar = document.getElementById("enviar");



  enviar.onclick = () => {
    if (email.value!==''&&pwd.value!=='') {
      newAviso('Enviando datos...');

      var formdata = new FormData();
      formdata.append("pwd", pwd.value);
      formdata.append("email", email.value);

      var requestOptions = {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*"
        },
      };
      console.log(formdata);
      console.log(requestOptions);

      axios
        .post(url, formdata, requestOptions)
        .then((Response) => {
          if (Response.data.error) {
            newAviso('Algo ha fallado, controle los datos e inténtelo de nuevo');
            console.log("error", response.data);
          } else {
            if (Response.data.isLogged) {
              newAviso('Se ha loggeado exitosamente!');
              console.log("todo bien", response.data);
            } else {
              newAviso('Hubo un problema al logearse, inténtelo de nuevo');
              console.log("error, no se logueó pero no tiro error", response.data);
            }
          }
        })
        .catch((e) => {
          console.error("Error", e);
          newAviso('No conectó con el servidor');
        });
    }
    else{
      newAviso('Hay campos que no estan cargados, por favor rellenálos');
    }
  };
};