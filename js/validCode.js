'use strict';

const url = "https://backforo.carlini.tech/api/validate.php";

const email = document.getElementById("email");
const code = document.getElementById("code");


enviar.onclick = () => {

    newAviso("Enviando datos...");

    var formdata = new FormData();

    formdata.append("email", email.value);
    formdata.append("validcode", code.value);

    var requestOptions = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    };

    console.log(requestOptions);

    axios.post(url, formdata, requestOptions)
        .then(Response => {
            console.log(Response);
            if (Response.data.error) {
                newAviso("algo ha fallado");
            } else {
                if (Response.data.changePassword) {
                    newAviso("se ha validado tu email");
                } else {
                    newAviso("hubo un problema, intenetelo de nuevo");
                }
            }
        })
        .catch(e => {
            console.error("Error no se detecta respuesta del servidor", e);
          newAviso("Error no se detecta respuesta del servidor");
        });



}