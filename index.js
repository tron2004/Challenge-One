
function encriptar(){

    let texto = document.getElementById("textoEncriptar").value;



    let textoCifrado = texto
        .replace(/e/gi , "enter")
        .replace(/i/gi , "imes")
        .replace(/a/gi , "ai")
        .replace(/o/gi , "ober")
        .replace(/u/gi , "ufat");

    if (document.getElementById("textoEncriptar").value.length != 0) {
        document.getElementById("textoEncriptar").value = textoCifrado;
        document.getElementById("exito").textContent = "Texto encriptado con éxito";
        document.getElementById("tituloMensaje").textContent ="";
        document.getElementById("parrafo").textContent ="";
        mostrarLike();
        
        
    } else{

        alert("Debes de ingresar algun texto");

    }

    
}


function desencriptar(){

    let texto = document.getElementById("textoEncriptar").value;

    let textoCifrado = texto
        .replace(/enter/gi,"e")
        .replace(/imes/gi , "i")
        .replace(/ai/gi , "a")
        .replace(/ober/gi,"o")
        .replace(/ufat/gi, "u")

    if (document.getElementById("textoEncriptar").value.length != 0) {
        document.getElementById("textoEncriptar").value = textoCifrado;
        document.getElementById("exito").textContent = "Texto desencriptado con éxito";
        document.getElementById("exito").style.left = "15%" 
        document.getElementById("tituloMensaje").textContent ="";
        document.getElementById("parrafo").textContent ="";
        mostrarLike();
    } else{
    
        alert("Debes de ingresar algun texto");
    
    }

    

}

function copiar(){

    let texto = document.getElementById("textoEncriptar").value;

    navigator.clipboard.writeText(texto)
    .then(() => {
      alert("Texto copiado al portapapeles correctamente.");
    })

}

function mostrarLike(){

    document.getElementById("lupita").style.display = "none";
    document.getElementById("like").style.display = "flex";

}