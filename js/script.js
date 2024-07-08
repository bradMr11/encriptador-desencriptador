// desarrollado por Briyan Ademar Mendez Rossillon
let texto = "";
let textoEncriptado = ""; 
let output = "";
let textoCopiado = "";

let botonCopiar = document.getElementById('copiar');

// desarrollado por Briyan Ademar Mendez Rossillon

function encriptar(){
    // Accediendo al valor del textarea del HTML haciendo usao del DOM
    texto = document.getElementById('texto').value;
    texto = texto.toLowerCase();
    // Encriptando el texto
    textoEncriptado = texto.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    // Colocando el texto encriptado en el área de salida
    output = document.getElementById("salida");
    output.value = textoEncriptado;
    output.textContent = textoEncriptado;

    botonCopiar.disabled = false;
}

function desencriptar(){
    // Accediendo al valor del textarea del HTML
    texto = document.getElementById('texto').value;

    // Desencriptando el texto
    textoEncriptado = texto.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");

    // Colocando el texto desencriptado en el área de salida
    output = document.getElementById("salida");
    output.value = textoEncriptado;
    output.textContent = textoEncriptado;
    botonCopiar.disabled = false;
}

function copiar() {
    console.log("Entró al botón copiar");
    
    textoCopiado = document.getElementById('salida').value;

    // Agregar dos saltos de línea al principio del texto
    const textoModificado = textoCopiado;

    // Crear un elemento temporal para copiar el texto modificado
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = textoModificado;
    document.body.appendChild(tempTextarea);

    // Seleccionar el texto del elemento temporal
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto seleccionado al portapapeles
    document.execCommand("copy");

    // Eliminar el elemento temporal
    document.body.removeChild(tempTextarea);

    // Dar retroalimentación al usuario
    console.log('Texto copiado al portapapeles, puedes pegar el texto ');
}



// desarrollado por Briyan Ademar Mendez Rossillon