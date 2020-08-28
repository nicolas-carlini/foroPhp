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
      var formdata = new FormData();
      formdata.append("pwd", pwd.value);
      formdata.append("name", usuario.value);
      formdata.append("email", email.value);

      var requestOptions = {
        headers: {
          "Content-Type": "multipart/form-data"
        },
      };

      console.log(requestOptions);

      axios
        .post(url, formdata, requestOptions)
        .then((Response) => {
          if (Response.data.error) {
            console.error("algo ha fallado");
          } else {
            if (Response.data.isRegistered) {
              console.log("se ha registrado exitosamente!");
            } else {
              console.log(
                "hubo un problema al registrarse, intenetelo de nuevo"
              );
            }
          }
        })
        .catch((e) => {
          console.error("Error", e);
        });
    } else {
      console.log("la contraseñas no coinciden");
    }
  };
};
