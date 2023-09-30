
//Este archivo se utiliza para encriptar y desencriptar texto

//Obtenemos los elementos HTML necesarios
let entradaText = document.getElementById("entradaT");
let botonEncriptar = document.getElementById("encriptarbtn");
let botonDesencriptar = document.getElementById("desencriptarbtn");
let botonLimpiar = document.getElementById("limpiarbtn");
let salidaText = document.getElementById("salidaT");

// Agregamos un evento DOMContentLoaded para asegurarnos de que el DOM se haya cargado antes de ejecutar nuestro código.
document.addEventListener("DOMContentLoaded", function() {

  //Boton para encriptar texto
  botonEncriptar.addEventListener("click", function(){
    let entrada = entradaText.value.toLowerCase().trim();

    if(entrada === ""){
      
    } else {
    let textoEncriptado = entrada.replace (/[a-z]/g, function(letra){

      switch (letra){
        case "a":
          return "ai";
        case "e":
          return "enter";
        case "i":
          return "imes";
        case "o":
          return "ober";
        case "u":
          return "ufat";
          
        default:
          return letra;}

    });
    salidaText.textContent = textoEncriptado; 
    }
  });


  
  //Boton para desencriptar
  botonDesencriptar.addEventListener("click", function(){
    let entradaDos = entradaText.value.toLowerCase().trim();

    if(entradaDos === ""){
    
    } else {
     textoDesencript = entradaDos
     .replace(/ai/g, "a")
     .replace(/enter/g, "e")
     .replace(/imes/g, "i")
     .replace(/ober/g, "o")
     .replace(/ufat/g, "u");
            
      salidaText.textContent = textoDesencript;
    }

  });

  //Boton para limpiar
  botonLimpiar.addEventListener("click", function (){
    entradaText.value = "";

    salidaText.innerHTML = `
      <img src="Imagenes/FiguraPersona.png" class="bloqueDos__imagen">
      <div class="bloqueDos__tx">
        <strong><p class="tx__uno">Ningún mensaje fue encontrado</p></strong>
        <p class="tx__dos">Ingresa el texto que desees encriptar o desencriptar</p>
      </div>
    `;
  });
  
});