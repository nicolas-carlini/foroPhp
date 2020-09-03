"use strict";
window.onload = function () {
  const url = "https://backforo.carlini.tech/api/signup.php";

  const pwd = document.getElementById("pwd");
  const pwd2 = document.getElementById("pwd2");
  const email = document.getElementById("email");
  const usuario = document.getElementById("usuario");
  const enviar = document.getElementById("enviar");

  enviar.onclick = () => {
    if (pwd.value === pwd2.value) {
      newAviso("Enviando datos...");
      var formdata = new FormData();
      formdata.append("pwd", pwd.value);
      formdata.append("name", usuario.value);
      formdata.append("email", email.value);

      var requestOptions = {
        headers: { "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*" },
      };

      console.log(requestOptions);

      axios
        .post(url, formdata, requestOptions)
        .then((Response) => {
          if (Response.data.error) {
            newAviso("algo ha fallado");
          } else {
            if (Response.data.isRegistered) {
              newAviso("se ha registrado exitosamente!");
            } else {
              newAviso(
                "hubo un problema al registrarse, intenetelo de nuevo"
              );
            }
          }
        })
        .catch((e) => {
          newAviso("Error no se detecta respuesta del servidor", e);
        });
    } else {
      newAviso("la contraseñas no coinciden");
    }
  };
};
