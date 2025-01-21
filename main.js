let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss"); 
        habilidades[1].classList.add("java"); 
        habilidades[2].classList.add("javascript"); 
        habilidades[3].classList.add("dockerkubernetes");
        habilidades[4].classList.add("spring");
        habilidades[5].classList.add("msvc");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajoequipo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("proyect");
    }
}

function mostrarTexto() {
    var textoCompleto = document.getElementById("texto-completo");
    var boton = document.getElementById("leer-mas");

    if (textoCompleto.style.display === "none") {
        textoCompleto.style.display = "block";
        boton.innerText = "Leer menos";
    } else {
        textoCompleto.style.display = "none";
        boton.innerText = "Leer más";
    }
}



//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 