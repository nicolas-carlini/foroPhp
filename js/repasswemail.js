"use strict";

window.onload = function () {
    const url = "https://backforo.carlini.tech/api/repass.php";

    const pwd = document.getElementById("pwd");
    const pwd2 = document.getElementById("pwd2");
    const pwd3 = document.getElementById("pwd3");
    const email = document.getElementById("email");
    const enviar = document.getElementById("enviar");

    enviar.onclick = () => {
        if (pwd2.value === pwd3.value) {
            newAviso("Enviando datos...");
            var formdata = new FormData();


            formdata.append("code", code.value);
            formdata.append("newPwd", pwd2.value);
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
                        newAviso("algo ha fallado");
                    } else {
                        if (Response.data.changePassword) {
                            newAviso("se ha cambiado exitosamente!");
                            location.href="/index.php";
                        } else {
                            newAviso(
                                "hubo un problema al registrarse, intenetelo de nuevo"
                            );
                        }
                    }
                })
                .catch((e) => {
                    console.error("Error no se detecta respuesta del servidor", e);
          newAviso("Error no se detecta respuesta del servidor");
                });
        } else {
            newAviso("la contraseñas no coinciden");
        }
    };
};