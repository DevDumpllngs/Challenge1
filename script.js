// Función para encriptar texto según las reglas dadas
function encryptText() {
    let input = document.getElementById("inputText").value;
    let encrypted = input
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("outputText").textContent = encrypted;
    document.getElementById("messageStatus").textContent = "Se ha encriptado el mensaje";
    document.getElementById("muñeco").src = "img/muñeco.png";
    document.getElementById("muñeco").classList.remove("encontrado");
    animateOutput();
}

// Función para desencriptar texto según las reglas dadas
function decryptText() {
    let input = document.getElementById("inputText").value;
    let decrypted = input
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("outputText").textContent = decrypted;
    document.getElementById("messageStatus").textContent = "¡Oh! Había un mensaje secreto";
    document.getElementById("muñeco").src = "img/encontrado.png";
    document.getElementById("muñeco").classList.add("encontrado"); // Cambiar tamaño de la imagen encontrada
    animateOutput();
}

// Función para copiar texto al portapapeles
function copyText() {
    let outputText = document.getElementById("outputText").textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        let copyStatus = document.getElementById("copyStatus");
        copyStatus.textContent = "Texto copiado al portapapeles";
        copyStatus.style.visibility = "visible";
        setTimeout(() => {
            copyStatus.style.visibility = "hidden";
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

// Función para animar la salida del texto
function animateOutput() {
    let outputText = document.getElementById("outputText");
    outputText.style.opacity = '0';
    setTimeout(() => {
        outputText.style.opacity = '1';
    }, 100);
}

// Animar el logo al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".logo").style.animation = "fadeIn 2s";
});
