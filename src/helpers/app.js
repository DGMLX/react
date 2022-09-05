const divLoader = document.querySelector(".div-loader");
const menu = document.querySelector(".bi-list");
const intersection1 = document.getElementById("intersection1");
const intersection2 = document.getElementById("intersection2");
const intersection3 = document.getElementById("intersection3");
const intersection4 = document.getElementById("intersection4");
const intersection5 = document.getElementById("intersection5");
const intersection6 = document.getElementById("intersection6");
const intersection7 = document.getElementById("intersection7");
const intersection8 = document.getElementById("intersection8");
const intersection9 = document.getElementById("intersection9");
const intersection10 = document.getElementById("intersection10");
const intersection11 = document.getElementById("intersection11");
const intersection12 = document.getElementById("intersection12");



//FUNCION PARA EL LOADER
window.addEventListener("load",vanish);
function vanish(){
    divLoader.classList.add("disappear");
}

// FUNCION PARA EL MENU RESPONSIVE
cargarEventListeners();
function cargarEventListeners(){
    menu.addEventListener("click",menuResponsive);
}

function menuResponsive(){
    const nav = document.querySelector(".contenedor-nav");
    const navegacion = document.querySelector("nav");
    if(!menu.classList.contains("active")){
        menu.classList.add("active");
        nav.style.display="block";
        nav.style.height="auto";
        nav.style.zIndex = "9999";
        nav.style.animation ="animacionNav";
        nav.style.animationDuration = ".5s";
        navegacion.style.animation="aparecer";
        navegacion.style.animationDuration=".5s";
    }else{
        nav.style.animation ="animacionNavReverse";
        nav.style.animationDuration = "1s";
        setTimeout(() => {
            nav.style.display="none"
        }, 900);
        menu.classList.remove("active");
    }
}

// FUNCION PARA ANIMACIONES INTERSECTION OBSERVER

const cargarIntersection = entradas=>{
    entradas.forEach(entrada=>{
        if(entrada.isIntersecting){
            entrada.target.classList.remove("estilo-intersection");
            entrada.target.classList.add("visible");
        }
    }
    )
}



const cargarIntersectionV = entradas =>{
    entradas.forEach(entrada=>{
        if(entrada.isIntersecting){
            entrada.target.classList.remove("intersection-vertical");
            entrada.target.classList.add("vertical");
        }
    })
}

const observador = new IntersectionObserver(cargarIntersection,{
    root:null,
    rootMargin:"0px 0px 0px 0px",
    threshold:0.5
}
);

const observador2 = new IntersectionObserver(cargarIntersection2,{
    root:null,
    rootMargin:"0px 0px 0px 0px",
    threshold:0.5
}
);

const observador3 = new IntersectionObserver(cargarIntersectionV,{
    root:null,
    rootMargin:"0px 0px 0px 0px",
    threshold:0.5
}
);


observador.observe(intersection1);
observador.observe(intersection2);
observador.observe(intersection3);

observador2.observe(intersection5);
observador2.observe(intersection6);
observador.observe(intersection7);
observador3.observe(intersection8);
observador3.observe(intersection9);
observador3.observe(intersection10);
observador.observe(intersection11);
observador.observe(intersection12);

