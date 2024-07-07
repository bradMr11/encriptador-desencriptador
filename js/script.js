let texto = "";
let textoEncriptado = ""; 
let output = "";
let textoCopiado = "";

let botonCopiar = document.getElementById('copiar');


function encriptar(){
    // accediendo al valor t¿del texarea del html
    texto = document.getElementById('texto').value;

    // encriptando el texto
    textoEncriptado = texto.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");


    // colocando el texto ecroptado en el area de salida
    output = document.getElementById("salida");
    output.value = textoEncriptado;
    output.textContent = textoEncriptado;

    botonCopiar.disabled = false;

}

function desencriptar(){
    // accediendo al valor t¿del texarea del html
    texto = document.getElementById('texto').value;

    // desencriptando el texto
    textoEncriptado = texto.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");


    // colocando el texto ecroptado en el area de salida
    output = document.getElementById("salida");
    output.value = textoEncriptado;
    output.textContent = textoEncriptado;
    botonCopiar.disabled = false;
}


function copiar() {
    console.log("entro al boton copiar");
    
    textoCopiado = document.getElementById('salida');

    // Paso 1: Crear un rango de selección
    const range = document.createRange();

    // Paso 2: Seleccionar el contenido del elemento <output>
    range.selectNode(textoCopiado);

    // Paso 3: Limpiar cualquier otra selección previa
    window.getSelection().removeAllRanges();

    // Paso 4: Agregar el rango de selección al objeto de selección actual
    window.getSelection().addRange(range);

    // Paso 5: Ejecutar el comando 'copy' para copiar el texto seleccionado al portapapeles
    document.execCommand('copy');

    // Paso 6: Limpiar la selección después de copiar
    window.getSelection().removeAllRanges();

    // Paso 7: Opcional: Dar retroalimentación al usuario (en este caso, logueando en la consola)
    console.log('Texto copiado al portapapeles, puedes pegarlo en el texare');
  
  }
