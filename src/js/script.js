const textArea = document.querySelector(".textArea");
const resultArea = document.querySelector(".resultArea");


function criptografar(stringCriptofragada) {
    let matrizCodigo = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringCriptofragada = stringCriptofragada.toLowerCase();
    for (i = 0; i < matrizCodigo.length; i++) {
        if (stringCriptofragada.includes(matrizCodigo[i][0])) {
            stringCriptofragada = stringCriptofragada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringCriptofragada;
}

function btnCriptografar() {
    const textoCriptografado = criptografar(textArea.value);
    resultArea.value = textoCriptografado
    resultArea.style.backgroundColor = "#1e1e1e"
}


function descriptografar(stringDescriptofragada) {
    let matrizCodigo = [
        ["ai", "a"],
        ["enter", "e"],
        ["imes", "e"],
        ["ober", "o"],
        ["ufat", "u"]
    ];
    stringDescriptofragada = stringDescriptofragada.toLowerCase();
    for (i = 0; i < matrizCodigo.length; i++) {
        if (stringDescriptofragada.includes(matrizCodigo[i][0])) {
            stringDescriptofragada = stringDescriptofragada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringDescriptofragada;
}

function btnDescriptografar() {
    const textoDescriptografado = descriptografar(textArea.value);
    resultArea.value = textoDescriptografado
    resultArea.style.backgroundColor = "#1e1e1e"
}