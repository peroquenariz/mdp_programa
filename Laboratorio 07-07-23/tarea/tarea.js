// Variables
const container = document.getElementById("container");
const main = document.getElementById("main");
const aside = document.getElementById("aside");
const buttonChange = document.getElementById("button-change");
const buttonBack = document.getElementById("button-back");


buttonChange.addEventListener("click",function(){
    container.style.flexDirection="column";
    main.style.width="100%";
    aside.style.width="100%";
})

buttonBack.addEventListener("click",function(){
    container.style.flexDirection="row";
    main.style.width="60%";
    aside.style.width="40%";
})