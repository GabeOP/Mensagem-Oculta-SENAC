// ---VARIÁVEIS GERAIS---
let inputTexto = document.getElementById("inputTexto")
let btn = document.getElementById('btn');
let inputBase = document.getElementById('inputBase');
let resultado = document.querySelector('.resultado');
// -----------------------



// ---TROCA DO TEXTO ENTRE 'CODIFICADO' E 'DECODIFICADO'---
let radiobtn1 = document.getElementById('radio1');
let radiobtn2 = document.getElementById('radio2');
let titulo = document.getElementById('inputTextoTitulo');
radiobtn1.addEventListener('click', radio1)
radiobtn2.addEventListener('click', radio2)
function radio1() {
    titulo.innerHTML = 'Texto para ser codificado:'
    inputTexto.value = ""
    inputBase.value = ""
}
function radio2() {
    titulo.innerHTML = 'Texto para ser decodificado:'
    inputTexto.value = ""
    inputBase.value = ""
}
// ---------------------------------------------------------



// ---DEPENDENDO DA CRIPTOGRAFIA SELECIONADA, MOSTRAR OU ESCONDE O INPUT DE QUANTIDADE DE SALTOS---
let baseContainer = document.getElementById('baseContainer');
let escolherDecodificacao = document.getElementById('escolherDecodificacao');

escolherDecodificacao.addEventListener('change', base);

function base() {
    if (escolherDecodificacao.value == "optCifra") {
        baseContainer.style.display = 'block'
        inputTexto.value == ""
    } else {
        baseContainer.style.display = 'none'
    }
}
// --------------------------------------------------------------------------------------



// ---CADA UMA DAS VALIDAÇÕES NECESSÁRIAS PARA A CRIPTOGRAFIA CORRETA SER FEITA---
btn.addEventListener('click', function () {
    if (inputTexto.value === "") {
        alert("Não há texto para ser codificado. Tente novamente.")
    } else if (inputBase.value === "" && escolherDecodificacao.value == "optCifra") {
        alert("Escolha a quantidade de saltos para a decodificação")
    } else if (radiobtn1.checked && escolherDecodificacao.value == "optCifra") {
        resultado.innerText = codificaCesar(inputTexto.value, parseInt(inputBase.value))
    } else if (radiobtn1.checked && escolherDecodificacao.value == "optBase64") {
        resultado.innerText = codificaBase64(inputTexto.value)
    } else if (radiobtn2.checked && escolherDecodificacao.value == "optBase64") {
        resultado.innerText = decodificaBase64(inputTexto.value)
    }
})
// ----------------------------------------------------------------------------------------



// ---FUNÇÃO PARA CODIFICAR E DECODIFICAR EM CIFRA DE CÉSAR---
function codificaCesar(str, base) {

    let txtCodificado = "";

    for (let i = 0; i < str.length; i++) {
        let asciiNum = str[i].charCodeAt()
        if (asciiNum >= 65 && asciiNum <= 90) {
            codigo = (((asciiNum - 65) + base) % 26) + 65
        } else if (asciiNum >= 97 && asciiNum <= 122) {
            codigo = (((asciiNum - 97) + base) % 26) + 97
        }
        txtCodificado += String.fromCharCode(codigo)
    }
    return txtCodificado
}
// ---------------------------------------------------------



// ---FUNÇÃO PARA CODIFICAR E DECODIFICAR EM BASE64---
function codificaBase64(txt) {
    return btoa(txt)
}

function decodificaBase64(txt) {
    return atob(txt)
}
// ---------------------------------------------------
