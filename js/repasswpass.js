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
            var formdata = new FormData();


            formdata.append("pwd", pwd.value);
            formdata.append("newPwd", pwd2.value);
            formdata.append("email", email.value);

            var requestOptions = {
                headers: {

                    "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "*"
                },
            };

            console.log(requestOptions);

            axios
                .post(url, formdata, requestOptions)
                .then((Response) => {
                    if (Response.data.error) {
                        console.error("algo ha fallado");
                    } else {
                        if (Response.data.changePassword) {
                            console.log("se ha cambiado exitosamente!");
                        } else {
                            console.log(
                                "hubo un problema al registrarse, intenetelo de nuevo"
                            );
                        }
                    }
                })
                .catch((e) => {
                    console.error("Error, se cayo todo rey", e);
                });
        } else {
            console.log("la contraseñas no coinciden");
        }
    };
};