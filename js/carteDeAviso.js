const cartel = document.getElementById("cartelDeAviso");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  

async function newAviso(text){
    cartel.innerHTML = text;
    cartel.className = "cartelDeAvisoON";
    await sleep(5000);
    cartel.className = "";
}

(async ()=>{
    await newAviso('pepe');
    await sleep(50);
    await newAviso('pepe2');
})() 