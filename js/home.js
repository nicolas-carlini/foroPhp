function mostrarPost() {

    const url = "https://backforo.carlini.tech/api/signin.php";

    var requestOptions = {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    };
    console.log(formdata);
    console.log(requestOptions);


    axios
        .post(url, requestOptions)
        .then((Response) => {
            if (Response.data.error) {
                newAviso('no se pudieron cargar los datos, por favor intentelo de nuevo');
                console.log("error", Response.data);
            } else {
                uwuposteo= document.getElementsByClassName("uwu-posteo");


                
            }
        })
        .catch((e) => {
            console.error("Error no se detecta respuesta del servidor", e);
            newAviso("Error no se detecta respuesta del servidor");
        });


}
function makePost(createdBy, content, titulo, nombre){
    let post="";			
    
    post+='<div id="mostrarPosts">';
    post+='<div class="posteo">';
    post+='<div class="posteo-user">';
    post+='<h4>'+nombre+'</h4>';
    post+='</div>';
    post+='<div class="posteo-titulo">';
    post+='<h4>'+titulo+'</h4>';
    post+='</div>';
    post+='<div class="posteo-body">';
    post+='<p>'+content+'</p>';
    post+='</div>';
    post+='</div>';
    post+='<div class="comentario">';
    post+='<button class="botonComentarios" onclick="mostrarComents('+createdBy+')">mostrar comentarios</button>';
    post+='<input type="text" name="comentar" id="coment'+createdBy+'" class="textcomen">';
    post+='<input type="submit" class="botonComentar" value="Comentar" name="comentarioBoton" onclick="comentar('+createdBy+')">';
    post+='</div>';
    post+='</div>';




return(post);
}



function mostrarComents(id){

    const url = "https://backforo.carlini.tech/api/signin.php";

    var requestOptions = {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    };
    console.log(formdata);
    console.log(requestOptions);


    axios
        .post(url, requestOptions)
        .then((Response) => {
            if (Response.data.error) {
                newAviso('no se pudieron cargar los comentarios, por favor intentelo de nuevo');
                console.log("error", Response.data);
            } else {
                uwuposteo= document.getElementsByClassName("uwu-posteo");


                
            }
        })
        .catch((e) => {
            console.error("Error no se detecta respuesta del servidor", e);
            newAviso("Error no se detecta respuesta del servidor");
        });

}

function makeComents(user,content){
    let coment="";
    coment+='<div class="coments" >';
    coment+='<div class="posteo-user">';
    coment+='<h4>'+user+'</h4>';
    coment+='</div>';
    coment+='<div class="posteo-body">';
    coment+='<p>'+content+'</p>';
    coment+='</div>';
    coment+='</div>';
    return coment;
}

function publicarPost(){

    const url = "https://backforo.carlini.tech/api/addPost.php";
    newAviso("Enviando datos...");

    content = document.getElementById("content");
    title = document.getElementById("title");

    var formdata = new FormData();
    formdata.append("content", content.value);
    formdata.append("title", title.value);

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
            newAviso('Se ha publicado');
        }
      })
      .catch((e) => {
        console.error("Error no se detecta respuesta del servidor", e);
        newAviso("Error no se detecta respuesta del servidor");
      });
}


function comentar(id){

    const url = "https://backforo.carlini.tech/api/addComent.php";
    newAviso("Enviando datos...");

    content = document.getElementById("content"+id);
    

    var formdata = new FormData();
    formdata.append("coment", content.value);

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
            newAviso('Se ha publicado');
        }
      })
      .catch((e) => {
        console.error("Error no se detecta respuesta del servidor", e);
        newAviso("Error no se detecta respuesta del servidor");
      });
}
